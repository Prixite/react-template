'use strict';

const create = React.createElement;

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,
            count: 0
        };
    }

    toggle() {
        let isStarted = true;
        if (this.state.start) {
            isStarted = false
        }

        this.setState({start: isStarted});
    }

    create(value) {
        const props = {
            onClick: () => this.toggle()
        };
        return create('button', props, value);
    }

    render() {
        if (this.state.start) {
            setTimeout(() => this.setState({count: this.state.count + 1}), 1000);
            return  this.create(this.state.count);
        }
        return this.create('Start Counter');
    }
}


const containers = document.querySelectorAll('.like_button_container');
containers.forEach((container, index) => {
    ReactDOM.render(create(Counter, {}), container);
});
