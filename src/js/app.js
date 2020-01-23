// import { Navbar } from './internal'

export class App {
  static selector = '#note-identifier-app'
  static menu = [
    {
      name: 'Novice Exercises',
      testName: 'Novice Test',
      id: 'exercises-novice',
      stars: 1,
      exercise: [
        {
          name: 'Exercise 1: Treble Novice',
          notes: [
            '64 C4',
            '67 D4',
            '70 E4',
            '73 F4',
            '76 G4',
          ],
        },
        {
          name: 'Exercise 2: Bass Novice',
          notes: [
            '193 C3',
            '196 D3',
            '199 E3',
            '202 F3',
            '205 G3',
          ],
        },
        {
          name: 'Exercise 3: Grand Staff Novice',
          notes: [
            '343 C3',
            '346 D3',
            '349 E3',
            '352 F3',
            '355 G3',
            '364 C4',
            '367 C4 2',
            '370 D4',
            '373 E4',
            '376 F4',
            '379 G4',
          ],
        },
        {
          name: 'Exercise 4: Alto Novice',
          notes: [
            '517 C4',
            '520 D4',
            '523 E4',
            '526 F4',
            '529 G4',
          ],
        },
      ],
    },
    {
      name: 'Apprentice Exercises',
      testName: 'Apprentice Test',
      id: 'exercises-apprentice',
      stars: 2,
      exercise: [
        {
          name: 'Exercise 5: Treble Apprentice',
          notes: [
            '64 C4',
            '67 D4',
            '70 E4',
            '73 F4',
            '76 G4',
            '79 A4',
            '82 B4',
            '85 C5',
          ],
        },
        {
          name: 'Exercise 6: Bass Apprentice',
          notes: [
            '193 C3', 
            '196 D3', 
            '199 E3', 
            '202 F3', 
            '205 G3', 
            '208 A3', 
            '211 B3', 
            '214 C4', 
          ],
        },
        {
          name: 'Exercise 7: Grand Staff Apprentice',
          notes: [
            '343 C3',
            '346 D3',
            '349 E3',
            '352 F3',
            '355 G3',
            '358 A3',
            '361 B3',
            '364 C4',
            '367 C4 2',
            '370 D4',
            '373 E4',
            '376 F4',
            '379 G4',
            '382 A4',
            '385 B4',
            '388 C5',
          ],
        },
        {
          name: 'Exercise 8: Alto Apprentice',
          notes: [
            '517 C4',
            '520 D4',
            '523 E4',
            '526 F4',
            '529 G4',
            '532 A4',
            '535 B4',
            '538 C5',
          ],
        },
      ]
    },
    {
      name: 'Adept Exercises',
      testName: 'Adept Test',
      id: 'exercises-adept',
      stars: 3,
      exercise: [
        {
          name: 'Exercise 9: Treble Adept',
          notes: [
            '70 E4',
            '73 F4',
            '76 G4',
            '79 A4',
            '82 B4',
            '85 C5',
            '88 D5',
            '91 E5',
            '94 F5',
          ],
        },
        {
          name: 'Exercise 10: Bass Adept',
          notes: [
            '184 G2',
            '187 A2',
            '190 B2',
            '193 C3',
            '196 D3',
            '199 E3',
            '202 F3',
            '205 G3',
            '208 A3',
          ],
        },
        {
          name: 'Exercise 11: Grand Staff Adept',
          notes: [
            '334 G2',
            '337 A2',
            '340 B2',
            '343 C3',
            '346 D3',
            '349 E3',
            '352 F3',
            '355 G3',
            '358 A3',
            '373 E4',
            '376 F4',
            '379 G4',
            '382 A4',
            '385 B4',
            '388 C5',
            '391 D5',
            '394 E5',
            '397 F5',
          ],
        },
        {
          name: 'Exercise 12: Alto Adept',
          notes: [
            '505 F3',
            '508 G3',
            '511 A3',
            '514 B3',
            '517 C4',
            '520 D4',
            '523 E4',
            '526 F4',
            '529 G4',
          ],
        },
      ],
    },
    {
      name: 'Expert Exercises',
      testName: 'Expert Test',
      id: 'exercises-expert',
      stars: 4,
      exercise: [
        {
          name: 'Exercise 13: Treble Expert',
          notes: [
            '70 E4',
            '71 E4#',
            '72 E4b',
            '73 F4',
            '74 F4#',
            '75 F4b',
            '76 G4',
            '77 G4#',
            '78 G4b',
            '79 A4',
            '80 A4#',
            '81 A4b',
            '82 B4',
            '83 B4#',
            '84 B4b',
            '85 C5',
            '86 C5#',
            '87 C5b',
            '88 D5',
            '89 D5#',
            '90 D5b',
            '91 E5',
            '92 E5#',
            '93 E5b',
            '94 F5',
            '95 F5#',
            '96 F5b',
          ],
        },
        {
          name: 'Exercise 14: Bass Expert',
          notes: [
            '184 G2',
            '185 G2#',
            '186 G2b',
            '187 A2',
            '188 A2#',
            '189 A2b',
            '190 B2',
            '191 B2#',
            '192 B2b',
            '193 C3',
            '194 C3#',
            '195 C3b',
            '196 D3',
            '197 D3#',
            '198 D3b',
            '199 E3',
            '200 E3#',
            '201 E3b',
            '202 F3',
            '203 F3#',
            '204 F3b',
            '205 G3',
            '206 G3#',
            '207 G3b',
            '208 A3',
            '209 A3#',
            '210 A3b',
          ],
        },
        {
          name: 'Exercise 15: Grand Staff Expert',
          notes: [
            '334 G2',
            '335 G2#',
            '336 G2b',
            '337 A2',
            '338 A2#',
            '339 A2b',
            '340 B2',
            '341 B2#',
            '342 B2b',
            '343 C3',
            '344 C3#',
            '345 C3b',
            '346 D3',
            '347 D3#',
            '348 D3b',
            '349 E3',
            '350 E3#',
            '351 E3b',
            '352 F3',
            '353 F3#',
            '354 F3b',
            '355 G3',
            '356 G3#',
            '357 G3b',
            '358 A3',
            '359 A3#',
            '360 A3b',
            '373 E4',
            '374 E4#',
            '375 E4b',
            '376 F4',
            '377 F4#',
            '378 F4b',
            '379 G4',
            '380 G4#',
            '381 G4b',
            '382 A4',
            '383 A4#',
            '384 A4b',
            '385 B4',
            '386 B4#',
            '387 B4b',
            '388 C5',
            '389 C5#',
            '390 C5b',
            '391 D5',
            '392 D5#',
            '393 D5b',
            '394 E5',
            '395 E5#',
            '396 E5b',
            '397 F5',
            '398 F5#',
            '399 F5b',
          ],
        },
        {
          name: 'Exercise 16: Alto Expert',
          notes: [
            '505 F3',
            '506 F3#',
            '507 F3b',
            '508 G3',
            '509 G3#',
            '510 G3b',
            '511 A3',
            '512 A3#',
            '513 A3b',
            '514 B3',
            '515 B3#',
            '516 B3b',
            '517 C4',
            '518 C4#',
            '519 C4b',
            '520 D4',
            '521 D4#',
            '522 D4b',
            '523 E4',
            '524 E4#',
            '525 E4b',
            '526 F4',
            '527 F4#',
            '528 F4b',
            '529 G4',
            '530 G4#',
            '531 G4b',
          ],
        },
      ],
    },
    {
      name: 'Master Exercises',
      testName: 'Master Test',
      id: 'exercises-master',
      stars: 5,
      exercise: [
        {
          name: 'Exercise 17: Treble Master',
          notes: [
            '100 A5',
            '101 A5#',
            '102 A5b',
            '103 B5',
            '104 B5#',
            '105 B5b',
            '106 C6',
            '107 C6#',
            '108 C6b',
            '109 D6',
            '110 D6#',
            '111 D6b',
            '112 E6',
            '113 E6#',
            '114 E6b',
            '115 F6',
            '116 F6#',
            '117 F6b',
            '118 G6',
            '119 G6#',
            '120 G6b',
            '121 A6',
            '122 A6#',
            '123 A6b',
            '124 B6',
            '125 B6#',
            '126 B6b',
            '40 B2',
            '41 B2#',
            '42 B2b',
            '43 C3',
            '44 C3#',
            '45 C3b',
            '46 D3',
            '47 D3#',
            '48 D3b',
            '49 E3',
            '50 E3#',
            '51 E3b',
            '52 F3',
            '53 F3#',
            '54 F3b',
            '55 G3',
            '56 G3#',
            '57 G3b',
            '58 A3',
            '59 A3#',
            '60 A3b',
            '61 B3',
            '62 B3#',
            '63 B3b',
            '64 C4',
            '65 C4#',
            '66 C4b',
            '67 D4',
            '68 D4#',
            '69 D4b',
            '70 E4',
            '71 E4#',
            '72 E4b',
            '73 F4',
            '74 F4#',
            '75 F4b',
            '76 G4',
            '77 G4#',
            '78 G4b',
            '79 A4',
            '80 A4#',
            '81 A4b',
            '82 B4',
            '83 B4#',
            '84 B4b',
            '85 C5',
            '86 C5#',
            '87 C5b',
            '88 D5',
            '89 D5#',
            '90 D5b',
            '91 E5',
            '92 E5#',
            '93 E5b',
            '94 F5',
            '95 F5#',
            '96 F5b',
            '97 G5',
            '98 G5#',
            '99 G5b',
          ],
        },
        {
          name: 'Exercise 18: Bass Master',
          notes: [
            '154 D1',
            '155 D1#',
            '156 D1b',
            '157 E1',
            '158 E1#',
            '159 E1b',
            '160 F1',
            '161 F1#',
            '162 F1b',
            '163 G1',
            '164 G1#',
            '165 G1b',
            '166 A1',
            '167 A1#',
            '168 A1b',
            '169 B1',
            '170 B1#',
            '171 B1b',
            '172 C2',
            '173 C2#',
            '174 C2b',
            '175 D2',
            '176 D2#',
            '177 D2b',
            '178 E2',
            '179 E2#',
            '180 E2b',
            '181 F2',
            '182 F2#',
            '183 F2b',
            '184 G2',
            '185 G2#',
            '186 G2b',
            '187 A2',
            '188 A2#',
            '189 A2b',
            '190 B2',
            '191 B2#',
            '192 B2b',
            '193 C3',
            '194 C3#',
            '195 C3b',
            '196 D3',
            '197 D3#',
            '198 D3b',
            '199 E3',
            '200 E3#',
            '201 E3b',
            '202 F3',
            '203 F3#',
            '204 F3b',
            '205 G3',
            '206 G3#',
            '207 G3b',
            '208 A3',
            '209 A3#',
            '210 A3b',
            '211 B3',
            '212 B3#',
            '213 B3b',
            '214 C4',
            '215 C4#',
            '216 C4b',
            '217 D4',
            '218 D4#',
            '219 D4b',
            '220 E4',
            '221 E4#',
            '222 E4b',
            '223 F4',
            '224 F4#',
            '225 F4b',
            '226 G4',
            '227 G4#',
            '228 G4b',
            '229 A4',
            '230 A4#',
            '231 A4b',
            '232 B4',
            '233 B4#',
            '234 B4b',
            '235 C5',
            '236 C5#',
            '237 C5b',
            '238 D5',
            '239 D5#',
            '240 D5b',
          ],
        },
        {
          name: 'Exercise 19: Grand Staff Master',
          notes: [
            '304 D1',
            '305 D1#',
            '306 D1b',
            '307 E1',
            '308 E1#',
            '309 E1b',
            '310 F1',
            '311 F1#',
            '312 F1b',
            '313 G1',
            '314 G1#',
            '315 G1b',
            '316 A1',
            '317 A1#',
            '318 A1b',
            '319 B1',
            '320 B1#',
            '321 B1b',
            '322 C2',
            '323 C2#',
            '324 C2b',
            '325 D2',
            '326 D2#',
            '327 D2b',
            '328 E2',
            '329 E2#',
            '330 E2b',
            '331 F2',
            '332 F2#',
            '333 F2b',
            '334 G2',
            '335 G2#',
            '336 G2b',
            '337 A2',
            '338 A2#',
            '339 A2b',
            '340 B2',
            '341 B2#',
            '342 B2b',
            '343 C3',
            '344 C3#',
            '345 C3b',
            '346 D3',
            '347 D3#',
            '348 D3b',
            '349 E3',
            '350 E3#',
            '351 E3b',
            '352 F3',
            '353 F3#',
            '354 F3b',
            '355 G3',
            '356 G3#',
            '357 G3b',
            '358 A3',
            '359 A3#',
            '360 A3b',
            '361 B3',
            '362 B3#',
            '363 B3b',
            '364 C4',
            '365 C4#',
            '366 C4b',
            '367 C4 2',
            '368 C4# 2',
            '369 C4b 2',
            '370 D4',
            '371 D4#',
            '372 D4b',
            '373 E4',
            '374 E4#',
            '375 E4b',
            '376 F4',
            '377 F4#',
            '378 F4b',
            '379 G4',
            '380 G4#',
            '381 G4b',
            '382 A4',
            '383 A4#',
            '384 A4b',
            '385 B4',
            '386 B4#',
            '387 B4b',
            '388 C5',
            '389 C5#',
            '390 C5b',
            '391 D5',
            '392 D5#',
            '393 D5b',
            '394 E5',
            '395 E5#',
            '396 E5b',
            '397 F5',
            '398 F5#',
            '399 F5b',
            '400 G5',
            '401 G5#',
            '402 G5b',
            '403 A5',
            '404 A5#',
            '405 A5b',
            '406 B5',
            '407 B5#',
            '408 B5b',
            '409 C6',
            '410 C6#',
            '411 C6b',
            '412 D6',
            '413 D6#',
            '414 D6b',
            '415 E6',
            '416 E6#',
            '417 E6b',
            '418 F6',
            '419 F6#',
            '420 F6b',
            '421 G6',
            '422 G6#',
            '423 G6b',
            '424 A6',
            '425 A6#',
            '426 A6b',
            '427 B6',
            '428 B6#',
            '429 B6b',
          ],
        },
        {
          name: 'Exercise 20: Alto Master',
          notes: [
            '475 C2',
            '476 C2#',
            '477 C2b',
            '478 D2',
            '479 D2#',
            '480 D2b',
            '481 E2',
            '482 E2#',
            '483 E2b',
            '484 F2',
            '485 F2#',
            '486 F2b',
            '487 G2',
            '488 G2#',
            '489 G2b',
            '490 A2',
            '491 A2#',
            '492 A2b',
            '493 B2',
            '494 B2#',
            '495 B2b',
            '496 C3',
            '497 C3#',
            '498 C3b',
            '499 D3',
            '500 D3#',
            '501 D3b',
            '502 E3',
            '503 E3#',
            '504 E3b',
            '505 F3',
            '506 F3#',
            '507 F3b',
            '508 G3',
            '509 G3#',
            '510 G3b',
            '511 A3',
            '512 A3#',
            '513 A3b',
            '514 B3',
            '515 B3#',
            '516 B3b',
            '517 C4',
            '518 C4#',
            '519 C4b',
            '520 D4',
            '521 D4#',
            '522 D4b',
            '523 E4',
            '524 E4#',
            '525 E4b',
            '526 F4',
            '527 F4#',
            '528 F4b',
            '529 G4',
            '530 G4#',
            '531 G4b',
            '532 A4',
            '533 A4#',
            '534 A4b',
            '535 B4',
            '536 B4#',
            '537 B4b',
            '538 C5',
            '539 C5#',
            '540 C5b',
            '541 D5',
            '542 D5#',
            '543 D5b',
            '544 E5',
            '545 E5#',
            '546 E5b',
            '547 F5',
            '548 F5#',
            '549 F5b',
            '550 G5',
            '551 G5#',
            '552 G5b',
            '553 A5',
            '554 A5#',
            '555 A5b',
            '556 B5',
            '557 B5#',
            '558 B5b',
            '559 C6',
            '560 C6#',
            '561 C6b',
          ],
        },
      ],
    },
  ]
  static defaultSettings = {
    helpers: false,
    nextQuestion: 0,
  }
  static settings = { }

  static checkUserBrowser() {
    // var ua = window.navigator.userAgent;
    // var msie = ua.indexOf("MSIE ");
    // if (msie > 0) // If Internet Explorer, return version number
    //   alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
    // else  // If another browser, return 0
    //   alert('otherbrowser');
  }

  static readSettings() {
    // console.log('Cookies: ', document.cookie)
    // let res = this.getCookie('settings')
    // console.log(res)

    let all = this.defaultSettings
    for (let key in all) {
      let value = this.getCookie(key)
        , number = parseInt(value)
      if (value) {
        if (value == 'true' || value == 'false')
          this.settings[key] = JSON.parse( value )
        else if (number) 
          this.settings[key] = number
        else 
          this.settings[key] = value
      }
      else {
        this.settings[key] = all[key]
      }
    }
    console.log(this.settings)

  }

  static resetSettings() {
  }

  static writeSettings(key, value) {
    let expireTime = this.setCookieExpireTime()
    document.cookie = `${key}=${value}; expires=${expireTime}; path=/`
  }

  static setCookieExpireTime() {
    let now = new Date();
    let time = now.getTime();
    let expireTime = time + 1000*36000;
    now.setTime(expireTime);
    return now.toGMTString()
  }
  
  static getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

}

// App.writeSettings('helpers', false)