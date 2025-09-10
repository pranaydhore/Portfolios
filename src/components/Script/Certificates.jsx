import React from 'react';
import { Award, Calendar, ExternalLink, Download, CheckCircle } from 'lucide-react';
import '../Style/Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Frontend Web Development with React.js and Javascript',
      issuer: 'Amazon Web Services',
      issueDate: 'March 2024',
      // expiryDate: 'March 2027',
      credentialId: 'https://www.cert.devtown.in/verify/Z1w075g',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop',
      description: 'Demonstrates expertise in developing and maintaining applications on the AWS platform.',
      skills: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'CloudFormation', 'S3'],
      verifyUrl: 'https://aws.amazon.com/verification/AWS-2024-DEV-001',
      downloadUrl: 'https://certificates.aws.com/download/AWS-2024-DEV-001.pdf',
      color: '#ff9500',
      featured: true
    },
    {
      id: 2,
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      issueDate: 'January 2024',
      expiryDate: 'Never expires',
      credentialId: 'META-REACT-2024-001',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop',
      description: 'Advanced React development skills including hooks, context, and performance optimization.',
      skills: ['React', 'JSX', 'Redux', 'React Router', 'Testing'],
      verifyUrl: 'https://meta.com/certificates/verify/META-REACT-2024-001',
      downloadUrl: 'https://certificates.meta.com/download/META-REACT-2024-001.pdf',
      color: '#61dafb',
      featured: false
    },
    {
      id: 3,
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      issueDate: 'December 2023',
      expiryDate: 'December 2025',
      credentialId: 'GCP-2023-DEV-001',
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=300&h=200&fit=crop',
      description: 'Professional-level expertise in developing scalable applications on Google Cloud Platform.',
      skills: ['Google Cloud', 'Kubernetes', 'Cloud Functions', 'BigQuery', 'Pub/Sub'],
      verifyUrl: 'https://cloud.google.com/certification/verify/GCP-2023-DEV-001',
      downloadUrl: 'https://certificates.googlecloud.com/download/GCP-2023-DEV-001.pdf',
      color: '#4285f4',
      featured: true
    },
    {
      id: 4,
      title: 'MongoDB Developer Certification',
      issuer: 'MongoDB University',
      issueDate: 'October 2023',
      expiryDate: 'Never expires',
      credentialId: 'MONGO-DEV-2023-001',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop',
      description: 'Comprehensive knowledge of MongoDB database design, queries, and optimization.',
      skills: ['MongoDB', 'Aggregation', 'Indexing', 'Sharding', 'Replica Sets'],
      verifyUrl: 'https://university.mongodb.com/verify/MONGO-DEV-2023-001',
      downloadUrl: 'https://certificates.mongodb.com/download/MONGO-DEV-2023-001.pdf',
      color: '#47a248',
      featured: false
    },
    {
      id: 5,
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      issueDate: 'August 2023',
      expiryDate: 'Never expires',
      credentialId: 'FCC-FULLSTACK-2023-001',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
      description: '300+ hours of coursework covering front-end and back-end web development.',
      skills: ['HTML/CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
      verifyUrl: 'https://freecodecamp.org/certification/verify/FCC-FULLSTACK-2023-001',
      downloadUrl: 'https://certificates.freecodecamp.org/download/FCC-FULLSTACK-2023-001.pdf',
      color: '#0a0a23',
      featured: false
    },
    {
      id: 6,
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      issueDate: 'June 2023',
      expiryDate: 'June 2026',
      credentialId: 'CKA-2023-001',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=300&h=200&fit=crop',
      description: 'Demonstrates skills in Kubernetes cluster administration and management.',
      skills: ['Kubernetes', 'Docker', 'Helm', 'kubectl', 'Container Orchestration'],
      verifyUrl: 'https://cncf.io/certification/verify/CKA-2023-001',
      downloadUrl: 'https://certificates.cncf.io/download/CKA-2023-001.pdf',
      color: '#326ce5',
      featured: true
    }
  ];

  return (
    <section className="certificates-section">
      <div className="certificates-container">
        <div className="section-header">
          <Award className="section-icon" />
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional certifications and achievements</p>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div 
              key={cert.id} 
              className={`certificate-card ${cert.featured ? 'featured' : ''}`}
              style={{ 
                '--cert-color': cert.color,
                animationDelay: `${index * 0.1}s` 
              }}
            >
              {cert.featured && (
                <div className="featured-badge">
                  <Award size={16} />
                  Featured
                </div>
              )}
              
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
                <div className="certificate-overlay">
                  <div className="overlay-content">
                    <CheckCircle className="verified-icon" />
                    <span>Verified Certificate</span>
                  </div>
                </div>
              </div>

              <div className="certificate-content">
                <div className="certificate-header">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-issuer">{cert.issuer}</p>
                </div>

                <div className="certificate-dates">
                  <div className="date-item">
                    <Calendar size={14} />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  <div className="date-item">
                    <Calendar size={14} />
                    <span>Expires: {cert.expiryDate}</span>
                  </div>
                </div>

                <p className="certificate-description">{cert.description}</p>

                <div className="certificate-skills">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="certificate-id">
                  <span>Credential ID: {cert.credentialId}</span>
                </div>

                <div className="certificate-actions">
                  <a 
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn verify-btn"
                  >
                    <ExternalLink size={16} />
                    Verify
                  </a>
                  <a 
                    href={cert.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn download-btn"
                  >
                    <Download size={16} />
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;