import {useState , useEffect} from "react"
import axios from "axios"

const NewsFeed = () => {
    const [search , setSearch] = useState("")
    const [news , setNews] = useState([])

    const handleChange = e => {
        setSearch(() => e.target.value)
    }

    useEffect(() => {

        axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`)
        .then(res => 
            setNews(() => res.data.hits))
        .catch(err => console.log(err))
    }, [search])

    return (


        <div>
            <h1>New Feed</h1>
            <input onChange={handleChange} type="text" placeholder="Search" value={search} />

            <ul>
                <h2>Information</h2>
                {
                    news.map(info => {
                        return (
                            <li>{info.title ? info.title: info.author }</li>
                        )
                    }) 
                }
            </ul>
        </div>
    ) 
}

export default NewsFeed