import {FaPizzaSlice,FaHamburger} from 'react-icons/fa';
import {GiNoodles,GiSpoon} from 'react-icons/gi';
import styled  from 'styled-components';
import {NavLink} from 'react-router-dom'

function Category(){
    return(
        <List>
            <SLink to={'cuisine/italian'}>
                <FaPizzaSlice></FaPizzaSlice>
                <h4>Italian</h4>
            </SLink>
            <SLink to={'cuisine/american'}>
                <FaHamburger></FaHamburger>
                <h4>American</h4>
            </SLink>
            <SLink to={'cuisine/thai'}>
                <GiNoodles></GiNoodles>
                <h4>Thai</h4>
            </SLink >
            <SLink to={'cuisine/indian'}>
                <GiSpoon></GiSpoon>
                <h4>Indian</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
display:flex;
justify-content:center;
margin: 10px;
text-align:center;
`
const SLink = styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:2rem;
text-decoration:none;
background:linear-gradient(35deg,#494949,#313131);
width:6rem;
height:6rem;
cursor:pointer;
transform:scale(0.8);

h4{
    color:white;
    font-size:0.8rem;
}

svg{
    color:white;
    font-size:1.5rem;
}
`

export default Category