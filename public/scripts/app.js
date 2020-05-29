'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.onMakeDecision = _this.onMakeDecision.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: []
            //options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
                console.log('ComponentDidMount fetching data');
            } catch (e) {}
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
                console.log('ComponentDidUpdate saving data');
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('ComponentWillUnmount');
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (state) {
                return {
                    options: state.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
            //console.log('hdo',option);
        }
    }, {
        key: 'onMakeDecision',
        value: function onMakeDecision() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            console.log(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {

            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }

            this.setState(function (state) {
                return { options: state.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision';
            var subtitle = 'Put your hands of a computer ';

            return (// subtitle={subtitle} as input of Header is optional
                React.createElement(
                    'div',
                    null,
                    React.createElement(Header, null),
                    React.createElement(Action, { onMakeDecision: this.onMakeDecision,
                        hasOptions: this.state.options.length > 0 }),
                    React.createElement(Options, {
                        options: this.state.options,
                        handleDeleteOptions: this.handleDeleteOptions,
                        handleDeleteOption: this.handleDeleteOption
                    }),
                    React.createElement(AddOption, { handleAddOption: this.handleAddOption })
                )
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

/* IndecisionApp.defaultProps = {
    options: []
}; */

var Header = function Header(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' ',
            props.title,
            ' '
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle,
            ' '
        )
    );
};
Header.defaultProps = {
    title: 'Indecision'
};
/* class Header extends React.Component {

    render(){
        return (
        <div>
            <h1> {this.props.title} </h1>
            <h2>{this.props.subtitle} </h2>
        </div>
        );
    }

} */
var Action = function Action(props) {
    return React.createElement(
        'button',
        {
            onClick: props.onMakeDecision,
            disabled: !props.hasOptions
        },
        'What should I do?'
    );
};
//class Action extends React.Component {

/*   handlePick(){
      alert('handlePick');
  } */

/*    render(){
       return (<button 
           onClick={this.props.onMakeDecision} // or handlePick
           disabled={!this.props.hasOptions}
           >
               What should I do?
               </button>);
   } */

//}

var Options = function Options(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove all '
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started!'
        ),
        React.createElement(
            'ol',
            null,
            props.options.map(function (option) {
                return React.createElement(Option, {
                    key: option,
                    optionText: option,
                    handleDeleteOption: props.handleDeleteOption
                });
            })
        )
    );
};

/* class Options extends React.Component {

 
    render(){
        return (<div>
            <button onClick={this.props.handleDeleteOptions}>Remove all </button>
            <ol>
             {
                 this.props.options.map((option) => <Option key={option} optionText= {option} />)
             }
             </ol>
            </div> );
    }

} */
/* class Option extends React.Component{
    render(){
        return (<li>{this.props.optionText}</li>  );
    }
} */

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'li',
            null,
            props.optionText,
            React.createElement(
                'button',
                { onClick: function onClick(e) {
                        props.handleDeleteOption(props.optionText);
                    } },
                'remove'
            )
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                e.target.elements.option.value = '';
            }

            /*    if(option){
                  this.props.handleAddOption(option);
               } */
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

/* const User = (props) =>{ // statelss functional component
    return(
        <div>
            <p>Name: {props.name} </p>
            <p>Age: {props.age}</p>
        </div>
    );
}; */
// <User name="Andrew"  age={26}/>


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
// <IndecisionApp options={['option1', 'option2']} />