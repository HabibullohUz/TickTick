import moment from "moment/moment"

function GetDayInMonth() {
  let m = moment().day(-7); // last Sunday (0 - 7)
  console.log(m.toString())
  console.log(moment().day())
}

export default GetDayInMonth