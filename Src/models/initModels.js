const bd = require('../utils/database')

const Users = require('./users.models')
const RecoveryPasswords = require('./recoveryPasswords.models')
const Conversations = require('./conversations.models')
const Messages = require('./messages.models')
const Participants = require('./participants.models')

const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)
    //? c. A user has or sends many messages
    Users.hasMany(Messages)
    Messages.belongsTo(Users)
    //? a. A user has many conversations
    Users.hasMany(Conversations)
    Conversations.belongsTo(Users)
    //? A participant has only one user
    Users.hasOne(Participants)
    Participants.belongsTo(Users)
    //? b. & d. A conversation has many participants
    Conversations.hasMany(Participants)
    Participants.belongsTo(Conversations)
    //? e. A conversation has many messages
    Conversations.hasMany(Messages)
    Messages.belongsTo(Conversations)

}

const initTrigger = () => {
    
    //?  It is executed only once, if you use nodemon you must comment this function in app.js
    return bd.query(
        `create or replace function init_Participants() returns trigger as
        $$
        begin 
            insert into participants values(uuid_generate_v4(), NEW."userId", new."id", current_date, current_date);
        for i in array_lower(NEW."initParticipants",1)..array_upper(NEW."initParticipants",1) 
            loop 
                insert into participants values(uuid_generate_v4(), NEW."initParticipants"[i], new."id", current_date, current_date);
                
            end loop;
            return new;
        end
        $$
        language 'plpgsql' volatile;
        create trigger TR_init_participants after insert on conversations for each row
        execute procedure init_Participants();

        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`
    )
}


module.exports = {
    initModels,
    initTrigger
}