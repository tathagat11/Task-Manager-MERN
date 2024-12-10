pipeline {
    agent any
    environment {
        ssh = credentials('ssh')
    }

    stages {
        stage('Getting files from SCM') {
            steps {
                git branch: 'main', url: 'https://github.com/tathagat11/Task-Manager-MERN.git'
            }
        }
        stage('Installing Node modules on server') {
            steps {
                dir('server') {
                    sh 'npm install'
                }
            }
        }
        stage('Testing server') {
            steps {
                dir('server') {
                    sh 'npm test'
                }
            }
        }
        stage('Installing Node modules on client') {
            steps {
                dir('client') {
                    sh 'npm install'
                }
            }
        }
        stage('Deploying client via ansible') {
            steps {
                ansiblePlaybook([
                    playbook: 'client_deploy.yml',
                    installation: 'ansible',
                    colorized: true,
                    disableHostKeyChecking: true,
                    credentialsId: ssh,
                ])
            }
        }
        stage('Deploying server via ansible') {
            steps {
                ansiblePlaybook([
                    playbook: 'server_deploy.yml',
                    installation: 'ansible',
                    colorized: true,
                    credentialsId: ssh,
                    disableHostKeyChecking: true,
                ])
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
