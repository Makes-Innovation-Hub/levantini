
{
  "userId:":1,
  score:120
  progress:[]
}
////////
//user enters categroy 1
{
  "userId:":1,
  progress:[{catgoeytId:1,status:'in progress'}]
}
//user finishes it
{
  "userId:":1,
  progress:[{catgoeytId:1,status:'completed'}]
}


// function trackUserAnswer(userId, categoryId, questionId, selectedAnswer, timeTaken) {
//     const userRef = firestore.collection('Users').doc(userId);
//     const categoryRef = firestore.collection('Categories').doc(categoryId);
//     // First, fetch the category to get questions
//     categoryRef.get().then((categoryDoc) => {
//         if (categoryDoc.exists) {
//             const questions = categoryDoc.data().questions; // Fetch the questions array
//             // Find the correct answer for the question
//             const question = questions.find(q => q.questionId === questionId);
//             let result; // This will hold the result ("correct", "incorrect", "timeout")
//             // Determine the result based on the user's input
//             if (timeTaken >= MAX_TIME) {
//                 result = "timeout"; // User did not answer in time
//                 timeTaken = MAX_TIME; // Set time taken to max time
//             } else if (question && question.correctAnswer === selectedAnswer) {
//                 result = "correct"; // Correct answer
//             } else {
//                 result = "incorrect"; // Incorrect answer
//             }
//             userRef.get().then((userDoc) => {
//                 if (userDoc.exists) {
//                     const progress = userDoc.data().progress || {};
//                     const categoryProgress = progress[categoryId] || {
//                         status: "not_completed",
//                         questionsAnswered: 0,
//                         totalQuestions: categoryDoc.data().totalQuestions,
//                         score: 0,
//                         questions: [] // Array to store individual question responses
//                     };
//                     // Update questions answered
//                     categoryProgress.questionsAnswered += 1;
//                     // Update score based on correctness
//                     if (result === "correct") {
//                         categoryProgress.score += 10; // Award points for correct answer
//                     }
//                     // Add question details
//                     categoryProgress.questions.push({
//                         questionId: questionId,
//                         result: result, // Set result to "correct", "incorrect", or "timeout"
//                         timeTaken: timeTaken, // Set time taken (max time if timed out)
//                         isAnswered: true // Mark this question as answered
//                     });
//                     // Check if completed
//                     if (categoryProgress.questionsAnswered === categoryProgress.totalQuestions) {
//                         categoryProgress.status = "completed";
//                     } else {
//                         categoryProgress.status = "in_progress";
//                     }
//                     // Update Firestore
//                     progress[categoryId] = categoryProgress;
//                     userRef.update({ progress: progress });
//                 }
//             }).catch((error) => {
//                 console.error("Error fetching user document: ", error);
//             });
//         } else {
//             console.error("Category not found");
//         }
//     }).catch((error) => {
//         console.error("Error fetching category document: ", error);
//     });
// }