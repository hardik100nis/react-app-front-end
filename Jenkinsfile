pipeline {
    agent any

    environment {
        IMAGE_NAME = 'my-react-app'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/hardik100nis/react-app-front-end.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install --legacy-peer-deps'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker run -d -p 3000:80 %IMAGE_NAME%'
            }
        }
    }

    post {
        failure {
            echo '❌ Build failed.'
        }
    }
}
