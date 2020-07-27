import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            actualNo: '',
            userGuessNo: '',
            diff: '',
            result: ''
        }
    }

    componentDidMount() {

        this.setState({
            actualNo: Math.floor(Math.random() * (this.props.range)) + 1
        })

    }

    changeNum = (e) => {
        this.setState({
            userGuessNo: e.target.value,
        })
    }

    checkNum = (e) => {
        e.preventDefault()
        this.setState({
            diff: Math.abs(this.state.userGuessNo - this.state.actualNo)
        }, () => this.result(this.state.diff))

    }

    result = (diff) => {
        let result = ''
        switch (true) {
            case diff === 0:
                result = 'Correct'
                this.props.countHandler()
                break
            case (diff > 0 && diff < 5):
                result = 'Hot'
                break
            case (diff > 4 && diff < 16):
                result = 'Warm'
                break
            default:
                result = 'Cold'
                break

        }
        this.setState({
            result
        })
    }

    render() {

        return (

            <div className='row' >
                <div className=' col s8 offset-s2 valign-wrapper white' style={{ border: '1px solid teal' }} >

                    {/* the form for number input */}
                    <div className='col s8' style={{ padding: '15px' }}>
                        <h5 align='center'>Guess the Number [ 1 - {this.props.range} ]</h5>
                        <form onSubmit={this.checkNum}>

                            <input
                                className='col s7'
                                placeholder='Write number here ...'
                                type='number'
                                value={this.state.userGuessNo}
                                onChange={this.changeNum} required />

                            <button
                                style={{ marginTop: 15 }}
                                className='waves-effect waves-light btn-small col s3 offset-s1 teal'
                                type='submit' >CHECK<i className='material-icons right'>fact_check</i></button>

                        </form>
                    </div>

                    {/* result by the comparison of number with actual number */}
                    <div className='col s4 center'>
                        <div className='card col s11' >
                            <h6>RESULT </h6>

                            <span 
                                className='valign-wrapper'
                                style={{ border: '1px solid teal', margin: '12px', height: '40px', padding: '0px 15px' }}>

                                {this.state.result ?
                                    this.state.result === 'Correct' ?
                                        <h5 className='teal-text'>{this.state.result}
                                            <i className='material-icons right'>done_outline</i>
                                        </h5> :
                                        <h5 className='golden-text '>{this.state.result}
                                            <i className='material-icons right'>insights</i>
                                        </h5>
                                    : null}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Input;
