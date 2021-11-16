import axios from 'axios';

class HelloWorldService {

    executeHelloWorldService() {
        return axios.get('http://localhost:9099/hello-world');
        //console.log('executed')
    }
}

export default new HelloWorldService()