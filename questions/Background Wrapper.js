class BackgroundWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            backgroundColor: ''
        })

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({backgroundColor: ""})
        }, 1000)
        const dom = this.getDOMNode()
        dom.style['backgroundColor'] = this.props.backgroundColor


    }

    componentDidUpdate() {
        setTimeout(() => {
            this.setState({backgroundColor: this.props.backgroundColor})
        }, 1000)
        const dom = this.getDOMNode()
        dom.style['backgroundColor'] = this.props.backgroundColor


    }

    render() {
        return <MediumButton text={"Click me!"}/>;
    }

    getDOMNode() {
        return ReactDOM.findDOMNode(this);
    }
}


BackgroundWrapper.defaultProps = {
    backgroundColor: "green"
};

const App = (props) => <BackgroundWrapper backgroundColor={props.backgroundColor}/>;