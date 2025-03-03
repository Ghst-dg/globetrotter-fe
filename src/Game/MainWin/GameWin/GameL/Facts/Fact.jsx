import './Fact.scss'
import Ring from '../../../../../Components/Ring/Ring'

const Fact = ({data, loading}) => {
    if(loading) return <Ring/>

    return (
        <div className="fact">
            <span>{data?.fun_fact}</span>
        </div>
    );
}

export default Fact;