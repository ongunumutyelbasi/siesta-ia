// --- 1. Define the FastAPI Endpoint URL ---
// This is your local server's address.
const API_BASE_URL = "http://127.0.0.1:8000/trust-score";

// --- 2. Define UI Elements ---
const checkButton = document.getElementById("checkButton");
const scoreResult = document.getElementById("score-result");

// --- 3. Main Function to Get URL and Call API ---
async function checkTrustScore() {
    // 1. Update UI to show loading state
    scoreResult.innerHTML = "Checking...";
    checkButton.disabled = true;

    try {
        // Use Chrome API to get the currently active tab's URL
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        const currentUrl = tabs[0].url;

        if (!currentUrl.startsWith("http")) {
            scoreResult.innerHTML = "Cannot check local or special browser pages.";
            return;
        }

        // 2. Construct the full API call URL
        const fullApiUrl = `${API_BASE_URL}?url=${encodeURIComponent(currentUrl)}`;

        // 3. Call your local FastAPI server
        const response = await fetch(fullApiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // 4. Display the results
        if (data.error) {
            // Handle known API errors (like the previous 'check failed' message)
            scoreResult.innerHTML = `API Error: ${data.details.split(': ')[1]}`;
        } else {
            // Display the final score
            // 🎯 FIXED LINE: Changed maximum score from 75 to 100 
            scoreResult.innerHTML = `Total Score: <b>${data.total_trust_score}/100</b>`;
            
            // Optional: Log full details to the browser console for debugging
            console.log("Full Trust Score Result:", data);
        }

    } catch (error) {
        // Handle network failure (e.g., Python server is not running)
        console.error("Fetch Error:", error);
        scoreResult.innerHTML = `Connection Error: Is your Python server running?`;
    } finally {
        // Re-enable the button regardless of success or failure
        checkButton.disabled = false;
    }
}

// --- 4. Attach Event Listener ---
// When the user clicks the button, run the checkTrustScore function
checkButton.addEventListener("click", checkTrustScore);