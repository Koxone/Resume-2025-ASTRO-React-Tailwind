const ResumeStyles = () => {
  return (
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
        line-height: 1.5;
        color: #2c3e50;
        background: #f5f7fa;
        margin: 0;
        padding: 0;
      }

      .resume-container {
        max-width: 21cm;
        margin: 20px auto;
        background: white;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        min-height: 29.7cm;
        position: relative;
      }

      .header {
        background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
        color: white;
        padding: 25px 30px;
        text-align: center;
      }

      .name {
        font-size: 2em;
        font-weight: 700;
        margin-bottom: 6px;
        letter-spacing: 0.5px;
      }

      .title {
        font-size: 1em;
        font-weight: 300;
        margin-bottom: 12px;
        opacity: 0.95;
      }

      .contact-info {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 12px;
        font-size: 0.8em;
      }

      .contact-item {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .main-content {
        display: grid;
        grid-template-columns: 1fr 2.2fr;
        gap: 0;
        min-height: calc(29.7cm - 120px);
      }

      .sidebar {
        background: #f8f9fa;
        padding: 25px 20px;
        border-right: 1px solid #e9ecef;
      }

      .content {
        padding: 25px 30px;
      }

      .section {
        margin-bottom: 22px;
      }

      .section:last-child {
        margin-bottom: 0;
      }

      .section-title {
        font-size: 1.1em;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 12px;
        padding-bottom: 5px;
        border-bottom: 2px solid #3498db;
        text-transform: uppercase;
        letter-spacing: 0.3px;
      }

      .sidebar .section-title {
        font-size: 0.95em;
      }



      .job {
        margin-bottom: 20px;
        padding-bottom: 18px;
        border-bottom: 1px solid #e9ecef;
      }

      .job:last-child {
        border-bottom: none;
        margin-bottom: 0;
      }

      .job-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 8px;
      }

      .job-title {
        font-weight: 600;
        font-size: 1em;
        color: #2c3e50;
        line-height: 1.3;
      }

      .company {
        font-weight: 500;
        color: #3498db;
        margin-bottom: 3px;
        font-size: 0.9em;
      }

      .location {
        font-size: 0.8em;
        color: #666;
      }

      .duration {
        font-size: 0.8em;
        color: #666;
        font-weight: 500;
        text-align: right;
        white-space: nowrap;
        min-width: 120px;
      }

      .job-description {
        margin-top: 10px;
        line-height: 1.5;
        color: #555;
        font-size: 0.85em;
      }

      .achievements {
        list-style: none;
        margin-top: 8px;
      }

      .achievements li {
        position: relative;
        padding-left: 15px;
        margin-bottom: 5px;
        line-height: 1.4;
        font-size: 0.85em;
      }

      .achievements li:before {
        content: "•";
        color: #3498db;
        font-weight: bold;
        position: absolute;
        left: 0;
      }

      .education-item,
      .language-item {
        margin-bottom: 15px;
      }

      .degree {
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 3px;
        font-size: 0.85em;
        line-height: 1.3;
      }

      .institution {
        color: #3498db;
        font-weight: 500;
        margin-bottom: 2px;
        font-size: 0.8em;
      }

      .education-details {
        font-size: 0.75em;
        color: #666;
      }

      .language-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
        border-bottom: 1px solid #e9ecef;
      }

      .language-name {
        font-weight: 500;
        font-size: 0.85em;
      }

      .language-level {
        background: #3498db;
        color: white;
        padding: 2px 8px;
        border-radius: 10px;
        font-size: 0.7em;
        font-weight: 500;
      }

      .skills {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }

      .skill-tag {
        background: #e8f4f8;
        color: #2c3e50;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.7em;
        font-weight: 500;
        border: 1px solid #d1ecf1;
      }

      .projects-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        margin-top: 10px;
      }

      .project-card {
        background: #f8f9fa;
        border: 1px solid #e9ecef;
        border-radius: 8px;
        padding: 15px;
        transition: all 0.3s ease;
      }

      .project-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
        border-color: #3498db;
      }

      .project-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 6px;
      }

      .project-title {
        font-size: 0.9em;
        font-weight: 600;
        color: #2c3e50;
        margin: 0;
        line-height: 1.3;
      }

      .project-link {
        font-size: 1em;
        text-decoration: none;
        color: #3498db;
        transition: color 0.3s ease;
      }

      .project-link:hover {
        color: #2980b9;
      }

      .project-description {
        color: #555;
        line-height: 1.4;
        margin-bottom: 10px;
        font-size: 0.75em;
      }

      .project-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }

      .tech-badge {
        background: #e8f4f8;
        color: #2c3e50;
        padding: 2px 6px;
        border-radius: 8px;
        font-size: 0.65em;
        font-weight: 500;
        border: 1px solid #d1ecf1;
      }

      .github-link {
        margin-top: 8px;
      }

      .github-link a {
        color: #3498db;
        text-decoration: none;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 0.8em;
      }

      .github-link a:hover {
        text-decoration: underline;
      }

      .download-btn {
        position: fixed;
        top: 20px;
        right: 20px;
        background: #3498db;
        color: white;
        border: none;
        padding: 10px 16px;
        border-radius: 20px;
        cursor: pointer;
        font-weight: 600;
        font-size: 0.85em;
        box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
      }

      .download-btn:hover {
        background: #2980b9;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
      }

      /* Print Styles for PDF */
      @media print {
        body {
          margin: 0;
          padding: 0;
          background: white;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .resume-container {
          box-shadow: none;
          max-width: none;
          margin: 0;
          padding: 0;
          width: 100%;
          min-height: auto;
        }

        .header {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .download-btn {
          display: none !important;
        }

        .main-content {
          break-inside: avoid;
        }

        .job,
        .project-card,
        .education-item {
          break-inside: avoid;
          page-break-inside: avoid;
        }

        .section {
          break-inside: avoid;
          page-break-inside: avoid;
        }

        .projects-grid {
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .project-card {
          break-inside: avoid;
          page-break-inside: avoid;
        }

        a {
          color: #3498db !important;
          text-decoration: none;
        }
      }

      @media (max-width: 768px) {
        .resume-container {
          margin: 10px;
          box-shadow: none;
        }

        .main-content {
          grid-template-columns: 1fr;
        }

        .contact-info {
          flex-direction: column;
          gap: 8px;
        }

        .job-header {
          flex-direction: column;
          gap: 5px;
        }

        .duration {
          text-align: left;
        }

        .projects-grid {
          grid-template-columns: 1fr;
          gap: 12px;
        }
      }

      /* Page break controls */
      .page-break {
        page-break-before: always;
      }

      .no-break {
        page-break-inside: avoid;
      }
    `}</style>
  );
};

export default ResumeStyles;
