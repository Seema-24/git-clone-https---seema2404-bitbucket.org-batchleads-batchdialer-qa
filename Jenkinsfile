pipeline {
  agent any
    
  tools {nodejs "Node14"}
    
  stages {
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh 'npm run report'
      }
    }  
  }
}
