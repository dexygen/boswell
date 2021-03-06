class BglReadingsApp extends React.Component {
  readingsFromHeaderBar = (readings) => {
    this.refs.logReadings.updateReadings(readings);
  }
  
  render() {
    return (
        <div>
          <div>
            <h1>BGL Readings Log</h1>
          </div>
          <HeaderBar updateLogReadings={this.readingsFromHeaderBar} />
          <div>
            <table>
              <tbody>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Date</th>
                  <th>Fasting BGL</th>
                  <th>Trending...</th>
                  <th>Overall..</th>
                  <th>Since Prior</th>
                </tr>
                <LogReadings ref="logReadings" />
              </tbody>
            </table>
          </div>
        </div>
    );
  }
}