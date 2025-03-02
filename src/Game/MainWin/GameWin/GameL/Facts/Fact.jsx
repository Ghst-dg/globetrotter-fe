import './Fact.scss'

const Fact = ({data}) => {
    return (
        <div className="fact">
            <span>{data?.fun_fact}</span>
        </div>
    );
}

export default Fact;