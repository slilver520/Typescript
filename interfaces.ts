type Nickname = string
type Health = number
type Friends = Array<string>

type Userr= {
    nickname: Nickname,
    healthBar: Health
}

const user1: Userr = {
    nickname:'user1',
    healthBar:10
}

/*
type을 지정된 옵션으로만 제한할 수도 있음

*/
type Team = 'red'| 'blue' | 'yellow'
type HealthBar = 1|5|10

type Playerr = {
    nickname: string,
    team: Team,
    helth: HealthBar
}

const sony :Playerr = {
    nickname:"sony",
    team: 'red',
    /*'pink' 안돼*/
    helth: 5
}

//6:23