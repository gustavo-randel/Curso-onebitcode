const dayjs = require('dayjs')

function birthday (date){
    const birthday = dayjs(date);
    const today = dayjs();

    const ageInYears = today.diff(birthday, 'years');
    const nextBirthday = birthday.add(ageInYears + 1, 'years')
    const daysToBirthday = nextBirthday.diff(today, 'days') + 1
    console.log(`Idade: ${ageInYears}`)
    console.log(`Data de nascimento: ${birthday.format('DD/MM/YYYY')}`)
    console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
    console.log(`Faltam ${daysToBirthday} dias para o próximo aniversário`)

}
birthday("2006-12-07")
