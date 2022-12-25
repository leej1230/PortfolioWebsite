import './resume.css'
import React from 'react'
import {GrDocumentDownload} from 'react-icons/gr'
import PDFdir from '../../assets/Jaewoo_Lee_Resume.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Resume = () => {
  return (
    <section id='resume'>
      <h5>All about me</h5>
      <h2>My Resume</h2>

      <div className="container resume__container">
        <div className="resume__preview">
          <h3>Resume Preview</h3>
          <div className="pdf__preview">
            <Document file={PDFdir}>
              <Page pageNumber={1} />
            </Document>
          </div>
        </div>

        <div className="resume__download">
          <a href={PDFdir} className='btn btn-primary'>
            Download <GrDocumentDownload />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume