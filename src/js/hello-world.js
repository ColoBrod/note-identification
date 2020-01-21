import { App } from './app'

App.checkUserBrowser()

export class HelloWorld {

  static log() {
    console.log('Hello world!')
  }

  static write() {
    document.body.append('Hello World!')
  }

}