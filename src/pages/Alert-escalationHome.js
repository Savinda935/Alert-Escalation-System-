import React, { useState } from 'react';
import { ChevronRight, Server, HardDrive, Code, AlertTriangle, CheckCircle } from 'lucide-react';

const AlertEscalationHome = () => {
  const [currentStep, setCurrentStep] = useState('initial');
  const [selectedPath, setSelectedPath] = useState(null);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (question, answer) => {
    setAnswers(prev => ({...prev, [question]: answer}));
  };

  const resetFlow = () => {
    setCurrentStep('initial');
    setSelectedPath(null);
    setAnswers({});
  };

  const EscalationBox = ({ person, details, type }) => (
    <div style={{
      backgroundColor: type === 'linux' ? '#e8f5e8' : '#fff3cd',
      border: `3px solid ${type === 'linux' ? '#28a745' : '#ffc107'}`,
      borderRadius: '8px',
      padding: '20px',
      margin: '20px 0',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      animation: 'highlight 2s ease-in-out infinite alternate'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '12px'
      }}>
        <AlertTriangle 
          size={24} 
          style={{ 
            color: type === 'linux' ? '#28a745' : '#ffc107',
            marginRight: '10px'
          }} 
        />
        <h3 style={{
          margin: 0,
          color: type === 'linux' ? '#155724' : '#856404',
          fontWeight: 'bold'
        }}>
          ESCALATE TO {person.toUpperCase()}
        </h3>
      </div>
      <p style={{
        margin: 0,
        color: type === 'linux' ? '#155724' : '#856404',
        fontWeight: '500'
      }}>
        {details}
      </p>
      <style jsx>{`
        @keyframes highlight {
          0% { transform: scale(1); }
          100% { transform: scale(1.02); }
        }
      `}</style>
    </div>
  );

  const QuestionCard = ({ title, questions, onYes, onNo, icon: Icon }) => (
    <div style={{
      backgroundColor: 'white',
      border: '2px solid #e9ecef',
      borderRadius: '12px',
      padding: '24px',
      margin: '20px 0',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <Icon size={28} style={{ color: '#007bff', marginRight: '12px' }} />
        <h2 style={{
          margin: 0,
          color: '#2c3e50',
          fontSize: '1.4rem'
        }}>
          {title}
        </h2>
      </div>
      
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h3 style={{
          color: '#495057',
          fontSize: '1.1rem',
          marginBottom: '15px'
        }}>
          Questions to Ask:
        </h3>
        {questions.map((q, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '10px'
          }}>
            <span style={{
              color: '#007bff',
              fontWeight: 'bold',
              marginRight: '8px'
            }}>
              •
            </span>
            <span style={{
              color: '#495057',
              lineHeight: '1.5'
            }}>
              {q}
            </span>
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex',
        gap: '15px',
        justifyContent: 'center'
      }}>
        <button
          onClick={onYes}
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
        >
          YES
        </button>
        <button
          onClick={onNo}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
        >
          NO
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(currentStep) {
      case 'initial':
        return (
          <QuestionCard
            title="Server Issue Identification"
            icon={Server}
            questions={[
              "Can you confirm if the issue is related to a physical or virtual server?",
              "Are there any specific error messages on the server dashboard or management console?",
              "Is the server inaccessible or behaving abnormally?"
            ]}
            onYes={() => setCurrentStep('server-escalation')}
            onNo={() => setCurrentStep('hardware-check')}
          />
        );

      case 'server-escalation':
        return (
          <EscalationBox
            person="Supun Weerasinghe"
            details="Escalate to Supun Weerasinghe with the above details in the ticket"
            type="server"
          />
        );

      case 'hardware-check':
        return (
          <QuestionCard
            title="Hardware Related Issue"
            icon={HardDrive}
            questions={[
              "Have you noticed any hardware alerts such as fan failure, disk errors, power supply issues?",
              "Are there any blinking or red LEDs on the server?",
              "Can you access iDRAC/ILO/Management console, and are there hardware-related warnings?"
            ]}
            onYes={() => setCurrentStep('hardware-escalation')}
            onNo={() => setCurrentStep('application-check')}
          />
        );

      case 'hardware-escalation':
        return (
          <EscalationBox
            person="Supun Weerasinghe"
            details="Escalate to Supun Weerasinghe with the above details in the ticket"
            type="hardware"
          />
        );

      case 'application-check':
        return (
          <QuestionCard
            title="Application Related Issue"
            icon={Code}
            questions={[
              "Which application or service is experiencing the issue?",
              "Are you getting any specific error messages from the application?",
              "Was there any recent deployment or config change?",
              "Is the backend database involved (e.g. Oracle)?"
            ]}
            onYes={() => setCurrentStep('application-type')}
            onNo={() => setCurrentStep('no-issues')}
          />
        );

      case 'application-type':
        return (
          <div style={{
            backgroundColor: 'white',
            border: '2px solid #e9ecef',
            borderRadius: '12px',
            padding: '24px',
            margin: '20px 0',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              color: '#2c3e50',
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              Select Issue Type
            </h2>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={() => setCurrentStep('linux-escalation')}
                style={{
                  backgroundColor: '#17a2b8',
                  color: 'white',
                  border: 'none',
                  padding: '15px 25px',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 3px 6px rgba(0,0,0,0.1)'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#138496'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#17a2b8'}
              >
                LINUX RELATED ISSUE
              </button>
              <button
                onClick={() => setCurrentStep('oracle-escalation')}
                style={{
                  backgroundColor: '#fd7e14',
                  color: 'white',
                  border: 'none',
                  padding: '15px 25px',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 3px 6px rgba(0,0,0,0.1)'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#e8690b'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#fd7e14'}
              >
                ORACLE RELATED ISSUE
              </button>
            </div>
          </div>
        );

      case 'linux-escalation':
        return (
          <EscalationBox
            person="Dimuthu Weerasinghe"
            details="Escalate to Dimuthu Weerasinghe with the above details in the ticket"
            type="linux"
          />
        );

      case 'oracle-escalation':
        return (
          <EscalationBox
            person="Supun Weerasinghe"
            details="Escalate to Supun Weerasinghe with the above details in the ticket"
            type="oracle"
          />
        );

      case 'no-issues':
        return (
          <div style={{
            backgroundColor: '#d4edda',
            border: '2px solid #c3e6cb',
            borderRadius: '12px',
            padding: '30px',
            margin: '20px 0',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <CheckCircle size={48} style={{ color: '#28a745', marginBottom: '15px' }} />
            <h2 style={{ color: '#155724', marginBottom: '10px' }}>
              No Issues Identified
            </h2>
            <p style={{ color: '#155724', margin: 0 }}>
              Based on the assessment, no critical issues were found that require escalation.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style jsx>{`
        @keyframes highlight {
          0% { 
            transform: scale(1);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
          100% { 
            transform: scale(1.02);
            box-shadow: 0 6px 16px rgba(0,0,0,0.2);
          }
        }
      `}</style>
      
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <h1 style={{
            color: '#2c3e50',
            textAlign: 'center',
            margin: '0 0 10px 0',
            fontSize: '2rem'
          }}>
            🚨 Alert Escalation System
          </h1>
          <p style={{
            color: '#6c757d',
            textAlign: 'center',
            margin: 0,
            fontSize: '1.1rem'
          }}>
            Follow the decision tree to properly escalate server issues
          </p>
        </div>

        {renderContent()}

        {currentStep !== 'initial' && (
          <div style={{
            textAlign: 'center',
            marginTop: '30px'
          }}>
            <button
              onClick={resetFlow}
              style={{
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                padding: '12px 25px',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#5a6268'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#6c757d'}
            >
              🔄 Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlertEscalationHome;