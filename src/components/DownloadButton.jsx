const DownloadButton = () => {
  const downloadPDF = () => {
    // Trigger print dialog
    window.print();
  };

  return (
    <button className="download-btn" onClick={downloadPDF}>
      📄 Download PDF
    </button>
  );
};

export default DownloadButton;
