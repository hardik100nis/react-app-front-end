pipeline {
    agent any

    environment {
        IMAGE_NAME = "react-site"
        CONTAINER_NAME = "react-container"
        PORT = "8080"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/hardik100nis/YOUR_REPO.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    docker rm -f $CONTAINER_NAME || true
                    docker run -d --name $CONTAINER_NAME -p $PORT:80 $IMAGE_NAME
                '''
            }
        }
    }

    post {
        success {
            echo "✅ App deployed successfully at http://localhost:$PORT"
        }
        failure {
            echo "❌ Build failed."
        }
    }
}
