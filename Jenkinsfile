pipeline {
    agent any

    environment {
        CI = 'false' // disable treat-warnings-as-errors in react-scripts
        IMAGE_NAME = "react-site"
        CONTAINER_NAME = "react-container"
        PORT = "8080"
    }

    stages {
        stage('Checkout') {
            steps {
         git branch: 'main', url: 'https://github.com/hardik100nis/react-app-front-end.git'

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
                bat 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat '''
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
