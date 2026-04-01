// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Close menu when link is clicked
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

function initChatbot() {
  if (document.querySelector(".chatbot-container")) {
    return;
  }

  const chatbotHTML = `
    <div class="chatbot-panel" aria-hidden="true">
      <div class="chatbot-header">
        <h4>Need help?</h4>
        <button type="button" class="chatbot-close" aria-label="Close chat">×</button>
      </div>
      <div class="chatbot-messages" role="log" aria-live="polite">
        <div class="chatbot-message bot">Hi! Ask me anything about the coffee shop.</div>
      </div>
      <form class="chatbot-form" aria-label="Chat with support">
        <input type="text" class="chatbot-input" placeholder="Type your question..." aria-label="Your question" />
        <button type="submit" class="chatbot-send">Send</button>
      </form>
    </div>
    <button type="button" class="chatbot-toggle" aria-label="Open chat">Chat</button>
  `;

  const container = document.createElement("div");
  container.className = "chatbot-container";
  container.innerHTML = chatbotHTML;
  document.body.appendChild(container);

  const panel = container.querySelector(".chatbot-panel");
  const toggle = container.querySelector(".chatbot-toggle");
  const close = container.querySelector(".chatbot-close");
  const messages = container.querySelector(".chatbot-messages");
  const form = container.querySelector(".chatbot-form");
  const input = container.querySelector(".chatbot-input");

  const scrollMessages = () => {
    messages.scrollTop = messages.scrollHeight;
  };

  const addMessage = (text, type) => {
    const message = document.createElement("div");
    message.className = `chatbot-message ${type}`;
    message.textContent = text;
    messages.appendChild(message);
    scrollMessages();
  };

  toggle.addEventListener("click", () => {
    container.classList.toggle("open");
    if (container.classList.contains("open")) {
      input.focus();
      panel.setAttribute("aria-hidden", "false");
    } else {
      panel.setAttribute("aria-hidden", "true");
    }
  });

  close.addEventListener("click", () => {
    container.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question) {
      return;
    }

    addMessage(question, "user");
    input.value = "";

    window.setTimeout(() => {
      addMessage(
        "Thanks for your question! A team member will get back to you soon. In the meantime, feel free to use the contact email above.",
        "bot"
      );
    }, 600);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initChatbot);
} else {
  initChatbot();
}
