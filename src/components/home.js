import React from 'react';
import { Helmet } from 'react-helmet';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as fetchAction from '../actions/fetch';
/* eslint-disable react/no-multi-comp */ 
const Home = (props) =>{
    //  这是一个使用redux 封装axios中间件请求示例
    const head = () => {
        return (
            <Helmet>
              <title>主页</title>
              <meta property="og:title" content="主页" />
            </Helmet>
        );
    };
    return(
        <div className="home">
            {head()}
            <h2 onClick={props.fetch_data}>主页</h2>
            {props.indexData !== null ? props.indexData.banner.map((elm,key)=>{
                return (
                    <div key={key}>
                        <span>{elm.content}</span>
                        <img src={elm.image_url} />  
                    </div>
                );
            }): '点击主页文字获取数据'}
        </div>
    );
};
Home.propTypes = {
    fetch_data: PropTypes.func.isRequired,
    indexData: PropTypes.objectOf(Array)
};
const mapStateToProps = (state)=>{
    return{
        indexData: state.home.indexData
    };
};
const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators(fetchAction,dispatch);
};
export default connect(mapStateToProps,mapDispatchToProps)(Home);