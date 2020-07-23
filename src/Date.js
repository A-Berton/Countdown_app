import React from "react";
import "./styles.css";

const DATE = new Date();

class Thedate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datevalue: "",
      timevalue: "",
      datediff: "",
      countdown_date: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      datevalue: event.target.value,
      timevalue: event.target.value
    });
  }

  handleSubmit(event) {
    this.myInterval = setInterval(() => {
      let mydate = new Date();
      let cdate = document.getElementById("date").value;
      let ctime = document.getElementById("time").value;
      cdate = cdate + " " + ctime;
      cdate = new Date(cdate);
      let ctdate = dateDiff(mydate, cdate);
      if (!(this.state.countdown_date < 0)) {
        this.setState({
          countdown_date: cdate,
          datediff: ctdate
        });
      } else {
      }
    }, 1000);
    event.preventDefault();
  }

  render() {
    return (
      <div className="wrap">
        <DateForm
          value={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <p>Date du jour: {DATE.toLocaleString("fr-FR")}</p>
        <p>
          Date choisie : {this.state.countdown_date.toLocaleString("fr-FR")}
        </p>
        <p>
          Countdown date :{" "}
          {this.state.datediff !== -1 ? this.state.datediff : "Fin!"}
        </p>
      </div>
    );
  }
}

function DateForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="date"
        id="date"
        value={props.datevalue}
        onChange={props.onChange}
      />
      <input
        type="time"
        id="time"
        value={props.timevalue}
        onChange={props.onChange}
      />
      <input type="submit" value="envoyer" />
    </form>
  );
}

export default Thedate;

function dateDiff(date1, date2) {
  let diff = [];
  let today = new Date(date1);
  let countday = new Date(date2);

  let distance = countday - today;
  let years = Math.floor(
    (distance % (1000 * 60 * 60 * 24 * 30 * 12 * 356)) /
      (1000 * 60 * 60 * 24 * 30 * 12)
  );
  let months = Math.floor(
    (distance % (1000 * 60 * 60 * 24 * 30 * 12)) / (1000 * 60 * 60 * 24 * 30)
  );
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  diff[0] = days + " jour, ";
  //les calculs sont fait mais on utilise pas l'an et le mois
  diff[3] = hours + " heures, ";
  diff[4] = minutes + " minutes, ";
  diff[5] = seconds + " secondes ";

  if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    return -1;
  }

  return diff;
}
