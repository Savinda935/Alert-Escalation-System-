# 🚨 Alert Escalation System

A React-based interactive decision tree system for properly escalating server-related issues to the appropriate technical personnel.

## 📋 Overview

The Alert Escalation System is a web-based tool designed to streamline the process of identifying and escalating server issues. It guides users through a series of diagnostic questions to determine the correct escalation path, ensuring issues are routed to the right technical experts efficiently.

## ✨ Features

- **Interactive Decision Tree**: Step-by-step guided troubleshooting process
- **Visual Escalation Alerts**: Highlighted and animated escalation boxes for clear visibility
- **Color-coded Categories**: Different visual themes for different issue types
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Professional UI/UX**: Clean, modern interface with smooth animations
- **Reset Functionality**: Easy restart option to begin the process again

## 🎯 Escalation Paths

### 1. Server-Related Issues
- **Escalate to**: Supun Weerasinghe
- **Triggers**: Physical/virtual server problems, dashboard errors, server accessibility issues

### 2. Hardware-Related Issues  
- **Escalate to**: Supun Weerasinghe
- **Triggers**: Fan failures, disk errors, power supply issues, LED indicators, iDRAC/ILO warnings

### 3. Linux-Related Issues
- **Escalate to**: Dimuthu Weerasinghe
- **Triggers**: Linux application or service problems

### 4. Oracle-Related Issues
- **Escalate to**: Supun Weerasinghe
- **Triggers**: Oracle database-related problems

## 🛠️ Technology Stack

- **Frontend**: React (Functional Components with Hooks)
- **Styling**: Inline CSS with dynamic styling
- **Icons**: Lucide React
- **State Management**: React useState
- **Animations**: CSS transitions and keyframe animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/alert-escalation-system.git
cd alert-escalation-system
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to `http://localhost:3000`

### Dependencies

```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "lucide-react": "^0.263.1"
}
```

## 📁 Project Structure

```
alert-escalation-system/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── AlertEscalationHome.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🎨 Component Features

### AlertEscalationHome.js

The main component that handles:
- **State Management**: Tracks current step, selected path, and user answers
- **Question Cards**: Displays diagnostic questions with professional styling
- **Escalation Boxes**: Highlighted containers showing escalation instructions
- **Navigation**: Handles flow between different decision points
- **Reset Functionality**: Allows users to restart the process

### Key Functions

- `handleAnswer()`: Records user responses
- `resetFlow()`: Resets the decision tree to initial state
- `EscalationBox()`: Renders highlighted escalation instructions
- `QuestionCard()`: Displays questions with Yes/No options

## 🎯 Usage

1. **Start**: Begin with the server issue identification questions
2. **Navigate**: Answer Yes/No to each set of diagnostic questions
3. **Escalate**: Follow the highlighted escalation instructions when reached
4. **Reset**: Use the "Start Over" button to restart the process

## 🔧 Customization

### Adding New Escalation Paths

To add new escalation paths, modify the `renderContent()` function in `AlertEscalationHome.js`:

```javascript
case 'new-issue-type':
  return (
    <EscalationBox
      person="New Person Name"
      details="Escalation details here"
      type="new-type"
    />
  );
```

### Styling Modifications

All styles are inline CSS for easy customization. Key style objects include:
- Escalation box animations
- Color schemes for different issue types
- Button hover effects
- Responsive design breakpoints

## 🧪 Testing

Run the test suite:
```bash
npm test
# or
yarn test
```

## 📦 Building for Production

Create a production build:
```bash
npm run build
# or
yarn build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Server & Hardware Issues**: Supun Weerasinghe
- **Linux Issues**: Dimuthu Weerasinghe

## 🐛 Issues & Support

If you encounter any issues or need support:
1. Check existing [Issues](https://github.com/yourusername/alert-escalation-system/issues)
2. Create a new issue with detailed description
3. Include screenshots if applicable

## 🔮 Future Enhancements

- [ ] Add ticket creation integration
- [ ] Implement user authentication
- [ ] Add escalation history tracking
- [ ] Include email notification system
- [ ] Add more detailed logging
- [ ] Create admin dashboard for managing escalation rules

## 📊 Screenshots

![Main Interface](screenshots/main-interface.png)
![Escalation Alert](screenshots/escalation-alert.png)
![Decision Tree](screenshots/decision-tree.png)

---

**Version**: 1.0.0  
**Last Updated**: July 2025  
**Maintained by**: IT Operations Team
