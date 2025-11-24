Howzit! Combining both tracks is a fantastic idea, creating a more comprehensive and powerful financial assistant. We'll call this combined project the "Mzansi Money Maven."

First, here's a detailed `README.md` file you can use to guide your development and track progress.

---

# Mzansi Money Maven

## Project Overview

The **Mzansi Money Maven** is an intelligent financial assistant designed to empower Investec clients in South Africa to understand their spending habits, identify unique patterns, and receive proactive, personalized nudges and explanations to foster better financial behaviour. Leveraging the Investec API, Next.js, React, and AI, this application aims to combine insightful data visualization with an agentic, actionable layer.

This project combines elements from Investec's "Pattern Finder" (Track A) and "Agent, Act!" (Track B) bounty tracks, creating a holistic experience for users.

## Features

### 🧩 Track A | Pattern Finder: The "Mzansi Budget Buddy"

**Goal:** Provide clear, localized insights into spending patterns through engaging dashboards.

-   **Core Functionality:**

    -   [ ] Secure Investec API integration for transaction data.
    -   [ ] Data processing and aggregation for pattern identification.
    -   [ ] Dynamic chart generation and dashboard display.
    -   [ ] Integration with external APIs for contextual SA-specific data.

-   **Key Features & Implementation Details:**

    1.  **Mzansi Budget Buddy Dashboard UI**

        -   [ ] Responsive React components for the dashboard.
        -   [ ] Clear display of various spending insights.
        -   [ ] Navigation between different "pattern cards."
        -   **Tools:** Next.js, React, Tailwind CSS.

    2.  **"Load Shedding Spikes" Insight Card**

        -   [ ] **Functionality:** Visualizes spending on categories like takeaways, convenience foods, or generator fuel during periods of load shedding.
        -   [ ] **Technical:**
            -   [ ] Fetch local load shedding schedules via Next.js API Route.
            -   [ ] Correlate transaction dates/times with load shedding data.
            -   [ ] Aggregate and display spending comparison (LS vs. non-LS).
        -   **Tools:** Next.js API Routes, EskomSePush API (or similar), `chart.js`/`recharts`, `date-fns`.

    3.  **"Petrol Price Tracker" Insight Card**

        -   [ ] **Functionality:** Overlays user's transport/fuel spending with historical petrol price data, highlighting impact.
        -   [ ] **Technical:**
            -   [ ] Fetch historical SA petrol prices via Next.js API Route (creative sourcing needed for free data).
            -   [ ] Categorize user fuel transactions.
            -   [ ] Display dual-axis line graph (spend vs. price).
        -   **Tools:** Next.js API Routes, `chart.js`/`recharts`, transaction categorization logic.

    4.  **"Braai Day Budget" Analysis Card**

        -   [ ] **Functionality:** Highlights spending on groceries, liquor, and entertainment around SA public holidays.
        -   [ ] **Technical:**
            -   [ ] Fetch South African public holidays via Next.js API Route.
            -   [ ] Analyze spending in relevant categories during holiday periods vs. average.
        -   **Tools:** Next.js API Routes, `date.nager.at` (or similar), `chart.js`/`recharts`.

    5.  **"Your Favourite Local Spot" Recognizer Card**
        -   [ ] **Functionality:** Identifies and displays the user's most frequented merchants based on transaction frequency/amount.
        -   [ ] **Technical:**
            -   [ ] Group transactions by merchant name.
            -   [ ] Count frequency and sum spend for top merchants.
        -   **Tools:** Plain JS/TS logic, `chart.js` (Pie Chart).

### 🤖 Track B | Agent, Act!: The "Savvy Spend Siren"

**Goal:** Build an AI agent that monitors behaviour, triggers useful, safe actions (with consent), or provides detailed, natural language explanations.

-   **Core Functionality:**

    -   [ ] Real-time (or near real-time) transaction monitoring.
    -   [ ] Rule-based triggers for spending patterns.
    -   [ ] Integration with an LLM for natural language generation.
    -   [ ] User consent management for agent actions.
    -   [ ] Notification delivery (email/SMS).
    -   [ ] Logging of agent actions and explanations.

-   **Key Features & Implementation Details:**

    1.  **Agent Dashboard & Consent Management UI**

        -   [ ] Dedicated section in the application for agent settings.
        -   [ ] Toggles to enable/disable specific "siren" nudges.
        -   [ ] Display of agent activity logs and explanations.
        -   **Tools:** Next.js, React, Tailwind CSS, SQLite/PostgreSQL (for preferences).

    2.  **Investec Transaction Monitoring Setup**

        -   [ ] **Functionality:** System to detect new transactions for agent processing.
        -   [ ] **Technical:**
            -   [ ] Implement a Next.js API Route as a webhook endpoint for Investec (if available).
            -   [ ] _Alternatively (for bounty):_ Implement a polling mechanism via a scheduled cron job (within Next.js API Route as a makeshift solution or dedicated worker).
        -   **Tools:** Next.js API Routes, `node-cron` (if polling).

    3.  **LLM Integration**

        -   [ ] **Functionality:** Send prompts to an LLM (Gemini 2.5 Flash) and process responses.
        -   [ ] **Technical:**
            -   [ ] Use Next.js API Routes to proxy LLM calls (keeping API key secure).
            -   [ ] Craft effective prompts for specific agent tasks.
        -   **Tools:** Gemini API client library (via `@google/generative-ai` npm package), Next.js API Routes.

    4.  **"The Impulse Protector" Siren**

        -   [ ] **Functionality:** Triggers a cool-off suggestion/explanation for high-value discretionary purchases in quick succession.
        -   [ ] **Technical:**
            -   [ ] Define thresholds for "high-value" and "quick succession."
            -   [ ] Logic to categorize discretionary transactions.
            -   [ ] LLM generates a personalized, empathetic nudge.
            -   [ ] Deliver notification (email/SMS) based on user consent.
        -   **Tools:** Next.js API Route (for agent logic), LLM (Gemini 2.5 Flash), `date-fns`, SQLite, `nodemailer`/`twilio`.

    5.  **"Subscription Sleuth" Siren**

        -   [ ] **Functionality:** Identifies recurring subscriptions and, if inactivity is detected, suggests management options.
        -   [ ] **Technical:**
            -   [ ] Logic to identify recurring payments.
            -   [ ] Basic inactivity detection (e.g., subscription payment but no related usage transactions in X period).
            -   [ ] LLM generates cancellation/pausing instructions.
            -   [ ] Deliver notification based on user consent.
        -   **Tools:** Next.js API Route (for agent logic), LLM (Gemini 2.5 Flash), SQLite, `nodemailer`/`twilio`.

    6.  **"Budget Explainer" Siren**

        -   [ ] **Functionality:** If a user consistently exceeds a category budget, the agent provides a natural language explanation of the contributing factors.
        -   [ ] **Technical:**
            -   [ ] User-defined category budgets stored.
            -   [ ] Monitor category spending against budget.
            -   [ ] LLM analyzes and explains "why" the budget was exceeded (e.g., "3 extra restaurant visits").
            -   [ ] Display explanation on dashboard or send via email.
        -   **Tools:** Next.js API Route (for agent logic), LLM (Gemini 2.5 Flash), SQLite.

    7.  **"Savings Trigger" Siren**
        -   [ ] **Functionality:** Detects unexpected surplus (refund, early pay) and suggests an automatic transfer to savings (with explicit, confirmed consent).
        -   [ ] **Technical:**
            -   [ ] Logic to identify positive income anomalies.
            -   [ ] LLM crafts a compelling suggestion message.
            -   [ ] _For Bounty:_ Focus on the suggestion and user consent flow; actual Investec API transfer might be mocked or simplified, requiring robust authorization.
        -   **Tools:** Next.js API Route (for agent logic), LLM (Gemini 2.5 Flash), SQLite, Investec API (for actual transfer, _handle with extreme care_).

## Technical Stack

-   **Frontend:** Next.js, React.js
-   **Styling:** Tailwind CSS
-   **Charting:** `chart.js` or `recharts`
-   **Date/Time Utilities:** `date-fns`
-   **Database:** SQLite (for local development/bounty, scalable to PostgreSQL)
-   **LLM:** Google Gemini 2.5 Flash API
-   **API Client Libraries:** Investec API client (if available) / `fetch`, `@google/generative-ai`
-   **Notifications:** `nodemailer` (email), `twilio` (SMS - free tier limited)

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/mzansi-money-maven.git
    cd mzansi-money-maven
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root directory and add your API keys:
    ```
    INVESTEC_CLIENT_ID=your_investec_client_id
    INVESTEC_CLIENT_SECRET=your_investec_client_secret
    INVESTEC_API_KEY=your_investec_api_key # If applicable
    GEMINI_API_KEY=your_gemini_api_key
    TWILIO_ACCOUNT_SID=your_twilio_account_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    TWILIO_PHONE_NUMBER=your_twilio_phone_number
    EMAIL_SERVICE_HOST=your_email_host # e.g., smtp.sendgrid.net
    EMAIL_SERVICE_PORT=your_email_port # e.g., 587
    EMAIL_SERVICE_USER=your_email_user
    EMAIL_SERVICE_PASS=your_email_password
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

Feel free to fork the repository, open issues, and submit pull requests.

---

## GitHub Project Setup & Issue Creation Script

This script will help you initialize your GitHub repository, create a project board, and automatically generate detailed issues for each feature outlined in the README. This helps with tracking progress and ensuring all aspects are covered.

**Prerequisites:**

1.  **GitHub CLI (`gh`):** Make sure you have the GitHub CLI installed and authenticated. If not, install it via your package manager or from [cli.github.com](https://cli.github.com/).
    ```bash
    # Check installation
    gh --version
    # Authenticate (if not already done)
    gh auth login
    ```
2.  **`jq`:** A lightweight and flexible command-line JSON processor. Used for parsing LLM responses if you choose to generate issues programmatically later. For now, it's good to have.
    ```bash
    # On macOS
    brew install jq
    # On Debian/Ubuntu
    sudo apt-get install jq
    ```
3.  **Node.js & npm/yarn:** For potential future scripting if you want more advanced automation.

**How to Use the Script:**

1.  Save the content below into a file named `setup_github.sh` in your project's root directory.
2.  Make the script executable: `chmod +x setup_github.sh`
3.  Run the script: `./setup_github.sh`

```bash
#!/bin/bash

# --- Configuration ---
REPO_NAME="mzansi-money-maven"
REPO_DESCRIPTION="An intelligent financial assistant for Investec clients, combining pattern finding and agentic AI. Built with Next.js, React, and Gemini 2.5 Flash."
PROJECT_TITLE="Mzansi Money Maven Development"
PROJECT_DESCRIPTION="Track development progress for the Mzansi Money Maven project, covering both Pattern Finder (Track A) and Agent, Act! (Track B) features."

# --- Helper function for creating issues ---
create_issue() {
    TITLE="$1"
    BODY="$2"
    LABELS="$3"
    echo "Creating issue: '$TITLE' with labels '$LABELS'"
    gh issue create --title "$TITLE" --body "$BODY" --label "$LABELS"
    if [ $? -ne 0 ]; then
        echo "Failed to create issue: $TITLE"
        echo "Body: $BODY"
        echo "Labels: $LABELS"
    fi
}

echo "--- Mzansi Money Maven GitHub Setup Script ---"

# --- 1. Initialize Git and Create GitHub Repository ---
echo "1. Initializing Git repository and creating GitHub repository..."
if [ ! -d ".git" ]; then
    git init
    git branch -M main
fi

# Check if repository already exists on GitHub to avoid recreation
REPO_CHECK=$(gh repo view "$REPO_NAME" --json name --jq .name 2>/dev/null)
if [ "$REPO_CHECK" == "$REPO_NAME" ]; then
    echo "Repository '$REPO_NAME' already exists on GitHub. Skipping creation."
    gh repo set-default "$REPO_NAME" # Ensure it's the default for subsequent commands
else
    gh repo create "$REPO_NAME" --public --description "$REPO_DESCRIPTION"
    if [ $? -ne 0 ]; then
        echo "Failed to create GitHub repository. Exiting."
        exit 1
    fi
    echo "Repository '$REPO_NAME' created successfully."
fi

# --- 2. Create Labels ---
echo "2. Creating GitHub labels..."
# Define labels as an associative array: "name" "description,color"
declare -A LABELS=(
    ["feature"]="New capability or enhancement,0E8A16"
    ["bug"]="Something isn't working,D73A4A"
    ["enhancement"]="Improvement on existing features,A2EEA2"
    ["chore"]="Maintenance tasks,cleanup,cfd3d7"
    ["documentation"]="Improvements or additions to documentation,0075CA"
    ["investec-api"]="Tasks related to Investec API integration,5319E7"
    ["ui/ux"]="User interface or experience improvements,fbca04"
    ["backend"]="Server-side logic, API Routes,c5def5"
    ["ai-agent"]="Agentic AI logic, LLM integration,84b6eb"
    ["track-a"]="Pattern Finder specific tasks,f9d0c4"
    ["track-b"]="Agent, Act! specific tasks,c2e0c6"
)

for label_name in "${!LABELS[@]}"; do
    label_details="${LABELS[$label_name]}"
    IFS=',' read -r label_description label_color <<< "$label_details"
    echo "  - Creating label: $label_name ($label_color)"
    gh label create "$label_name" --description "$label_description" --color "$label_color" 2>/dev/null
done
echo "Labels created/ensured."

# --- 3. Create GitHub Project Board (Optional for CLI, but good to link to) ---
# GitHub CLI currently doesn't have direct project creation.
# You'd typically create this manually via the GitHub UI for finer control
# over columns etc. We'll at least create issues and add them to the default backlog.
# You can manually create a project later and link issues to it.
echo "3. (Optional) Create GitHub Project Board manually via the UI if desired. Issues will be created below."

# --- 4. Create Issues for Each Feature ---
echo "4. Creating GitHub Issues..."

# --- Track A Issues ---
echo "  -- Creating Track A (Pattern Finder) Issues --"
create_issue "Setup: Mzansi Budget Buddy Dashboard UI" "Develop the core responsive React components for the Mzansi Budget Buddy dashboard, including navigation and basic layout." "feature,ui/ux,track-a"
create_issue "Investec API Integration for Transactions" "Implement secure fetching of user transaction history from the Investec API via Next.js API Routes. Ensure robust error handling." "feature,backend,investec-api,track-a"
create_issue "Data Processing: Transaction Categorization & Aggregation" "Develop logic to categorize transactions (e.g., 'Takeaways', 'Fuel', 'Groceries') and aggregate spending data for pattern analysis." "feature,backend,track-a"

create_issue "Feature: 'Load Shedding Spikes' Insight Card" """
**Goal:** Visualize user spending during periods of load shedding.
**Tasks:**
- Implement Next.js API Route to fetch EskomSePush (or similar) load shedding schedules.
- Develop logic to correlate transaction dates/times with load shedding data.
- Integrate Chart.js/Recharts to display comparative spending (LS vs. non-LS).
- Create a dedicated UI card for this insight on the dashboard.
""" "feature,ui/ux,backend,track-a"

create_issue "Feature: 'Petrol Price Tracker' Insight Card" """
**Goal:** Overlay user fuel spending with historical petrol price data.
**Tasks:**
- Implement Next.js API Route to fetch historical SA petrol prices (research free data sources).
- Develop logic to identify and aggregate user fuel transactions.
- Integrate Chart.js/Recharts for a dual-axis line graph.
- Create a dedicated UI card for this insight.
""" "feature,ui/ux,backend,track-a"

create_issue "Feature: 'Braai Day Budget' Analysis Card" """
**Goal:** Highlight spending patterns around South African public holidays.
**Tasks:**
- Implement Next.js API Route to fetch SA public holidays.
- Develop logic to analyze spending in relevant categories (groceries, liquor) during holiday periods.
- Integrate Chart.js/Recharts to display comparative spending.
- Create a dedicated UI card for this insight.
""" "feature,ui/ux,backend,track-a"

create_issue "Feature: 'Your Favourite Local Spot' Recognizer Card" """
**Goal:** Identify and display the user's most frequented merchants.
**Tasks:**
- Implement logic to group transactions by merchant name.
- Calculate frequency and total spend for top merchants.
- Integrate Chart.js (Pie Chart) to visualize top spots.
- Create a dedicated UI card for this insight.
""" "feature,ui/ux,backend,track-a"

# --- Track B Issues ---
echo "  -- Creating Track B (Agent, Act!) Issues --"
create_issue "Setup: Agent Dashboard & Consent Management UI" """
**Goal:** Create the user interface for managing the AI agent and its nudges.
**Tasks:**
- Develop dedicated UI section for agent settings.
- Implement toggles to enable/disable specific "siren" nudges.
- Design and implement a view for displaying agent activity logs and explanations.
- Integrate with database for storing user consent and preferences.
""" "feature,ui/ux,backend,ai-agent,track-b"

create_issue "Backend: Investec Transaction Monitoring" """
**Goal:** Establish a mechanism to detect new Investec transactions for agent processing.
**Tasks:**
- If Investec provides webhooks: Implement a Next.js API Route to receive and process webhook events.
- *Alternatively (for bounty):* Implement a polling mechanism via a scheduled cron job (within Next.js API Route or a separate lightweight worker) to check for new transactions.
""" "feature,backend,investec-api,ai-agent,track-b"

create_issue "Backend: Gemini 2.5 Flash LLM Integration" """
**Goal:** Integrate the Gemini 2.5 Flash API for natural language generation.
**Tasks:**
- Implement Next.js API Routes to securely proxy LLM calls.
- Set up the `@google/generative-ai` client library.
- Develop utility functions for sending prompts and parsing LLM responses.
""" "feature,backend,ai-agent,track-b"

create_issue "Feature: 'The Impulse Protector' Siren" """
**Goal:** Agent detects quick, high-value discretionary purchases and suggests a 'cool-off'.
**Tasks:**
- Define configurable thresholds for 'high-value' and 'quick succession'.
- Develop logic to categorize discretionary transactions.
- Implement LLM prompt for generating empathetic nudge messages.
- Integrate notification system (email/SMS) for delivering nudges based on user consent.
""" "feature,ai-agent,backend,track-b"

create_issue "Feature: 'Subscription Sleuth' Siren" """
**Goal:** Agent identifies inactive subscriptions and suggests management options.
**Tasks:**
- Develop logic to identify recurring payments.
- Implement basic inactivity detection heuristics (e.g., subscription payment without related usage).
- Implement LLM prompt for generating cancellation/pausing instructions.
- Integrate notification system (email/SMS) for delivering nudges based on user consent.
""" "feature,ai-agent,backend,track-b"

create_issue "Feature: 'Budget Explainer' Siren" """
**Goal:** Agent explains *why* a user exceeded a budget in natural language.
**Tasks:**
- Implement user-definable category budgets storage.
- Develop logic to monitor spending against budgets and identify contributing factors.
- Implement LLM prompt for generating detailed, human-readable explanations.
- Integrate explanation display on the dashboard or via email.
""" "feature,ai-agent,backend,track-b"

create_issue "Feature: 'Savings Trigger' Siren" """
**Goal:** Agent detects unexpected surplus and suggests an automatic transfer to savings.
**Tasks:**
- Develop logic to identify positive income anomalies (refunds, early pay).
- Implement LLM prompt to craft compelling savings suggestion messages.
- Design the user consent and authorization flow for suggested transfers.
- *For Bounty:* Focus on the suggestion and consent; actual Investec API transfer implementation might be mocked or simplified.
""" "feature,ai-agent,backend,investec-api,track-b"

# --- Infrastructure & Core Issues ---
echo "  -- Creating Core/Infrastructure Issues --"
create_issue "Database Setup: SQLite/PostgreSQL" "Set up a local SQLite database (or PostgreSQL for production consideration) to store user preferences, consent, agent logs, and budgets." "chore,backend"
create_issue "Environment Variables & Security Configuration" "Properly configure all environment variables (API keys, etc.) and ensure secure handling (e.g., proxying through API Routes)." "chore,backend"
create_issue "Error Handling & Logging" "Implement robust error handling across the application and set up basic logging for debugging and agent activity." "chore,backend"
create_issue "Deployment Configuration (Vercel/Netlify)" "Prepare the Next.js application for deployment to a platform like Vercel or Netlify. Consider separate worker for agent if needed." "chore,backend"
create_issue "Documentation: API Usage & Project Guide" "Write comprehensive documentation for Investec API usage, external APIs, and a general project guide." "documentation"

echo "All issues created. Check your GitHub repository's 'Issues' tab."
echo "--- Script Complete ---"

```
