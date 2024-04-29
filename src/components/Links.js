import user from "../data/user"
const links = user.links

function Links ({github , linkedin}){
    return (
        <>
        <h3>Links</h3>
        <div>
        <a href = "https://github.com/liza">{github}</a>
        <a href = "https://www.linkedin.com/in/liza/">{linkedin}</a>
        </div>
        
        </>
        
    )
}

export default Links