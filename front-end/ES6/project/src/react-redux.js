const ValueContext = React.createContext();
connect()();
export const connect = (mapStateToProps, mapDispatchToProps, mergeProps) => (WrappedComponent) => {
    return class extends Compnent {
        static contextType = ValueContext
        constructor (props) {
            super(props);
            this.state = {}
        }
        componentDidMount () {
            const {subscribe} = this.context;

            // 首次执行
            this.update();

            // 监听store的改变
            subscribe(update())
        }
        update = () => {
            const {dispatch, getState, subscribe} = this.context;

            // getState获取当前store的数据
            let stateProps = mapStateToProps(getState());
            let dispatchProps;
            if (typeof mapDispatchToProps === 'object') {
                dispatchProps = bindActionCreators(mapDispatchToProps);
            }
            else if (typeof mapDispatchToProps === 'function') {
                dispatchProps = mapDispatchToProps(dispatch, this.props)
            }
            else {
                // 默认注入dispatch
                dispatchProps = {dispatch}
            }
            this.setState({
                props:{
                    ...stateProps,
                    ...dispatchProps
                }
            })
        }
        render () {
            return <WrappedComponent {...this.state.props}/>
        }
    }

}

export class Provider extends Component {
    constructor (props) {
        super(props);
        this.state = {}
    }
    render () {
        return (
            <ValueContext.Provider value={this.props.store}>
                this.props.children
            </ValueContext.Provider>
        )
    }
}
function bindActionCreator (creator, dispatch) {
    return (...args) => dispatch(creator(...args))
}
export function bindActionCreators (creators, dispatch) {
    const obj = {};
    for (const key in creators) {
        obj[key] = bindActionCreator(creators[key], dispatch);
    } 
    return obj;
}
