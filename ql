[1mdiff --git a/requests/conversations.rest b/requests/conversations.rest[m
[1mindex 34beae2..2e99481 100644[m
[1m--- a/requests/conversations.rest[m
[1m+++ b/requests/conversations.rest[m
[36m@@ -7,15 +7,17 @@[m [mGET {{rootRoute}}[m
 Authorization: JWT {{token}}[m
 [m
 [m
[31m-# @name createConversation[m
[32m+[m
 ### Crear una conversacion - AUTHENTICATION REQUIRED -[m
 POST {{rootRoute}}[m
[32m+[m[32mContent-Type: application/json[m
 Authorization: JWT {{token}}[m
 [m
 {[m
[31m-    "title" : "conversacion andrea melendez - jacinta perez", [m
[31m-    "initParticipants" : "{2x8s15s-656s-26sd-26s6-xs78626635}" [m
[31m-    }[m
[32m+[m[32m  "title": "orlando y jonas ",[m
[32m+[m[32m  "initParticipants": "{asa26s14d-as26-sd41-5s5s-a858487scs, ae55a7ef-0f33-695ax-w485-s515s16aa}",[m
[32m+[m[32m  "imageUrl": "example/url"[m
[32m+[m[32m}[m
 [m
 [m
 [m
[1mdiff --git a/src/conversations/conversations.controllers.js b/src/conversations/conversations.controllers.js[m
[1mindex as15cdcs..0as51c85 2x8515x[m
[1m--- a/src/conversations/conversations.controllers.js[m
[1m+++ b/src/conversations/conversations.controllers.js[m
[36m@@ -27,16 +27,11 @@[m [mconst findAllConversations = async (userId) => {[m
 }[m
 [m
 const createConversation = async (obj) => {[m
[31m-    console.log(obj.title)[m
[31m-    console.log(obj.userId)[m
[31m-    console.log(obj.initParticipants)[m
[31m-    console.log(obj.imageUrl)[m
     const data = await Conversations.create({[m
         id: uuid.v4(),[m
         title: obj.title,[m
         userId : obj.userId,[m
         imageUrl: obj.imageUrl,[m

[31m-        // initParticipants: obj.initParticipants[m
         initParticipants: sequelize.literal(`'${obj.initParticipants}'`)[m
     })[m
     // await Participants.create({[m
     
[36m@@ -54,4 +49,6 @@[m [mconst createConversation = async (obj) => {[m
 module.exports = {[m
     findAllConversations,[m
     createConversation[m
[31m-}[m
\ No newline at end of file[m
[32m+[m[32m}[m
[41m+[m
[41m+[m

