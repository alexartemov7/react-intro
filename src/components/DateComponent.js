function DateComponent(){
    const myDate = new Date()
    const today = myDate.getDate()
    const weekday = myDate.getDay()
    const year = myDate.getFullYear()
    const month = myDate.getMonth()
    console.log(today)
    return(
        <div>
            <h2>this is date component</h2>
        Today is day: {today}
        <br />
        WeekDay: {weekday}
        <br />
        Year: {year}
        <br />
        {`${month}/${today}/${year}`}
        <br />

        </div>
    )
}


export default DateComponent