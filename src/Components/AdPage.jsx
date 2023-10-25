export default class Page extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {click: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick()
    {
        this.setState((state) => (
                {
                    click: !state.click,
                }
            )
        );
    }

    render()
    {
        return (
            <div>
                <Ad>
                    clicktf = {this.state.click}
                </Ad>

                <button onClick = {this.handleToggleClick} > 
                {
                    this.state.click ? "광고 안 보기" : "광고 보기"
                }
                </button>
            </div>
        );
    }
}