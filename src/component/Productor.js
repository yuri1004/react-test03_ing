import './Productor.css';

// 자식 컨퍼넌트
function ListItem({str}){
    // console.log(str)
    return(
        <figure>
            <img src={str.imageUrl} alt={str.name}/>
            <figcaption>
                <dl>
                    <dt>{str.name}</dt>
                    <dd>id : {str.id}</dd>
                    <dd>detail : {str.detail}</dd>
                    <dd>price : {str.price}</dd>
                </dl>
            </figcaption>
        </figure>
    )
}




// 부모 컨퍼넌트
export default function Productor({item}){
    return(
        <ul>
            {item.map(
                (str)=>(
                <li key={str.id}> <ListItem str={str}/> </li>)
                )}
        </ul>
    )
}