import React,{Component} from 'react'
import { Link } from 'react-router'

class MainPage extends Component{
 render() {
   return <div>热烈欢迎!<Link to="/edit"><h4>组织管理</h4></Link></div>
 }
}
export default MainPage;
