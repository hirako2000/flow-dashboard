var React = require('react');
import {RaisedButton, FlatButton} from 'material-ui';
import {Link} from 'react-router';
var AppConstants = require('constants/AppConstants');
var util = require('utils/util');

export default class About extends React.Component {
    static defaultProps = {}
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        util.set_title("About");
    }

    render() {
        let {user} = this.props;
        let _feedback;
        if (user) _feedback = (
            <div>
                <h3>Thanks for Using Flow</h3>

                <p>Have feedback? Get in touch via Github, or email onejgordon (gmail).</p>
            </div>
            )
        return (
            <div>

                <div className="text-center">

                    <h2 style={{marginTop: "40px", marginBottom: "60px"}}>About Flow</h2>

                    <p className="lead" style={{fontSize: "1.45em"}}>{ AppConstants.TAGLINE }</p>

                    <div className="row">

                        <h3>The Flow Dashboard</h3>

                        <p className="lead" style={{fontSize: "1.45em"}}>Track habits, monthly and annual goals, and the top tasks of the day. Submit daily journals with customizable questions.</p>

                        <img src="/images/screenshots/dashboard.png" className="img-responsive" />

                        <h3>Visualize everything.</h3>

                        <p className="lead" style={{fontSize: "1.45em"}}>Everything you put into Flow can be visualized, including your daily journal questions, task completion...</p>

                        <img src="/images/screenshots/analysis.png" className="img-responsive" />

                        <p className="lead" style={{fontSize: "1.45em"}}>...performance on individual habits...</p>

                        <img src="/images/screenshots/habit.png" className="img-responsive" />

                        <p className="lead" style={{fontSize: "1.45em"}}>...progress towards weekly targets, and more.</p>

                        <img src="/images/screenshots/habit_trend.png" className="img-responsive" />

                        <h3>Flow Snapshot (beta).</h3>

                        <p className="lead" style={{fontSize: "1.45em"}}>Snapshots are a short questionnaire collected at random times throughout the day via your smartphone.</p>

                        <img src="/images/screenshots/snapshots.png" className="img-responsive" />


                        <h3>Your timeline.</h3>

                        <p className="lead" style={{fontSize: "1.45em"}}>A birds-eye-view of your life by weeks.</p>

                        <img src="/images/screenshots/timeline.png" className="img-responsive" />



                        <div className="row">
                            <div className="col-sm-6">
                                <h3>Your Data is Yours</h3>

                                <p className="lead" style={{fontSize: "1.45em"}}>
                                    Flow will never share your data with any third party without explicit authorization.<br/><br/>
                                    Export any of your data, at any time, to CSV. Developers can also access their data via API.<br/>
                                    <Link to="/app/privacy">See our privacy policy</Link>.
                                </p>

                            </div>
                            <div className="col-sm-6">
                                <h3>Flow is Open Source</h3>
                                <p className="lead" style={{fontSize: "1.45em"}}>Run your own instance of Flow, or contribute.</p>
                                <a href="https://github.com/hirako2000/flow-dashboard" target="_blank"><RaisedButton label="Source on Github" /></a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}
