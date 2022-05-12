import React from 'react'

function AccessCard() {
    return (
      <div style={{ margin: "35px 0" }}>
        <div style={{ margin: "18px 0" }}>
          <h2>
            In-house onboarding flow {"  "}
            <a
              style={{
                color: "blue",
                textDecoration: "none",
                fontSize: "12px",
              }}
              href="https://cios-demo.netlify.app/access"
            >
              /access
            </a>
          </h2>
          <p>Cios deserves its own onboarding flow :)</p>
        </div>
        {/* Screenshot */}
      </div>
    );
}

export default AccessCard
