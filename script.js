function therapistReply(msg) {
  msg = msg.toLowerCase();

  // 1. Detect emotion keywords
  if (msg.includes("sad") || msg.includes("down") || msg.includes("depressed")) {
    return pick([
      "I'm really sorry you're feeling this way. What do you think triggered these feelings?",
      "That sounds heavy. When did you start feeling this sadness?",
      "It’s okay to feel sad. You’re not alone. Can you tell me more about what’s weighing you down?"
    ]);
  }

  if (msg.includes("anxious") || msg.includes("scared") || msg.includes("worried")) {
    return pick([
      "Anxiety can be overwhelming. What thoughts have been running through your mind?",
      "You’re safe here. What’s the biggest thing making you feel worried?",
      "It’s okay to feel anxious. Let’s explore it together — what’s the root of the fear?"
    ]);
  }

  if (msg.includes("angry") || msg.includes("mad") || msg.includes("pissed")) {
    return pick([
      "Anger is a valid emotion. What happened to make you feel this way?",
      "It sounds like something crossed your boundary. Want to talk about it?",
      "Your feelings are valid. Let’s unpack that anger — what triggered it?"
    ]);
  }

  if (msg.includes("tired") || msg.includes("exhausted") || msg.includes("burnt")) {
    return pick([
      "It sounds like you’ve been carrying too much. What has been draining your energy recently?",
      "Burnout hits hard. How long have you been feeling this way?",
      "You deserve rest. What part of life feels the heaviest right now?"
    ]);
  }

  if (msg.includes("lonely") || msg.includes("alone")) {
    return pick([
      "Feeling lonely can be painful. When do you feel it most?",
      "You’re not a burden. What makes you feel disconnected from others?",
      "You deserve connection. Tell me what that loneliness feels like."
    ]);
  }

  if (msg.includes("confused") || msg.includes("lost")) {
    return pick([
      "It’s okay to feel lost sometimes. What are you unsure about?",
      "Confusion usually means something matters to you. Want to explore it?",
      "Let’s take it step by step. What part of the situation feels unclear?"
    ]);
  }

  if (msg.includes("relationship") || msg.includes("heartbreak") || msg.includes("breakup")) {
    return pick([
      "Relationships can deeply affect us. What happened between you two?",
      "Heartbreak hurts. What part of it has been hardest for you?",
      "You deserved to be treated with care. Want to tell me your side?"
    ]);
  }

  // 2. If user asks for support
  if (msg.includes("help") || msg.includes("support")) {
    return pick([
      "I’m here with you. What kind of support do you feel you need right now?",
      "You’re not doing this alone. Tell me what’s troubling you.",
      "Let’s work through this together. What’s the first thing on your mind?"
    ]);
  }

  // 3. Generic reflective responses
  return pick([
    "I hear you. Can you tell me more about that?",
    "That sounds important. How does it make you feel?",
    "I want to understand better — what happened next?",
    "What do you think is the biggest part affecting you right now?",
    "That must feel like a lot. What thoughts has it brought you?"
  ]);
}

// Helper function to choose a random response
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}