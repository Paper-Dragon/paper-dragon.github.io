import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as t,c as l,b as i,e,a as r,d as n}from"./app-FgC1YFTT.js";const u="/assets/2ab113f5bbfc49a9befae75e5d06fa08tplv-k3u1fbpfcp-zoom-in-crop-mark4536000-y_k96fF-.webp",v="/assets/6474dac09c9f4e9584cb52f4369659dftplv-k3u1fbpfcp-zoom-in-crop-mark4536000-LQ5VoiCF.webp",c="/assets/0093421e41164cadaa99f7c6cff38cdbtplv-k3u1fbpfcp-zoom-in-crop-mark4536000-awTWQVV1.webp",o="/assets/79962ef2cd624404a0561097cf39a7c2tplv-k3u1fbpfcp-zoom-in-crop-mark4536000-DYjxmJFR.webp",m="/assets/8271350760154f89bf6bf126de2a5b85tplv-k3u1fbpfcp-zoom-in-crop-mark4536000-kOec3Wve.webp",b={},p=n(`<h1 id="fastapi-python高性能web框架" tabindex="-1"><a class="header-anchor" href="#fastapi-python高性能web框架"><span>FastAPI--python高性能web框架</span></a></h1><blockquote><p>https://github.com/Paper-Dragon/learn-fastapi</p><p>https://www.bilibili.com/video/BV1iN411X72b</p></blockquote><h2 id="第2章-fastapi介绍和项目准备" tabindex="-1"><a class="header-anchor" href="#第2章-fastapi介绍和项目准备"><span>第2章 FastAPI介绍和项目准备</span></a></h2><h3 id="_2-1-starlette-pydantic-与-fastapi-框架是什么关系" tabindex="-1"><a class="header-anchor" href="#_2-1-starlette-pydantic-与-fastapi-框架是什么关系"><span>2.1 Starlette，Pydantic 与 FastAPI 框架是什么关系？</span></a></h3><p>python的类型提示，基于类型提示type hints</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
from typing import List
def func(name:str,age:int,l:List):
    
    print(name,age)
    print(l)    
# Python的类型提示使用方法，使用的好能够提高代码的健壮性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pydantic是一个基于Python类型提示来定义数据验证，序列化和文档（使用JSON模式）库</p><p>Starlette是一个轻量级的ASGI框架/工具包，是构建高性能Asyncio服务的理想选择</p><figure><img src="`+u+'" alt="image-20210202092756107" tabindex="0" loading="lazy"><figcaption>image-20210202092756107</figcaption></figure>',9),q={href:"https://github.com/liaogx/fastapi-tutorial",target:"_blank",rel:"noopener noreferrer"},_=n(`<p>一定要注意版本的兼容性</p><h3 id="_2-2-pydantic基础教程" tabindex="-1"><a class="header-anchor" href="#_2-2-pydantic基础教程"><span>2.2 Pydantic基础教程</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
Data validation and settings management using python type annotations.
使用Python的类型注解来进行数据校验和settings管理

pydantic enforces type hints at runtime, and provides user friendly errors when data is invalid.
Pydantic可以在代码运行时提供类型提示，数据校验失败时提供友好的错误提示

Define how data should be in pure, canonical python; validate it with pydantic.
定义数据应该如何在纯规范的Python代码中保存，并用Pydantic验证它

from typing import List
from datetime import datetime
from pydantic import BaseModel

# 如果类的属性中有默认值是选填，没有默认值就是必填的
class User(BaseModel):
    id = int
    name: str = &quot;andy&quot;
    signup_list: datetime
    friends: List[int] = []

external_data = {
    &quot;id&quot;: 1,
    &quot;signup_list&quot;: &quot;2021-02-02 10:10&quot;,
    &quot;friends&quot;:[1, 2, &quot;3&quot;]
}
user = User(**external_data)
print(user.name)
print(user.friends)
print(repr(user.signup_list))
print(user.dict())  # 以字典的格式输出
print(user.json())  # 以json的格式输出


# class People(User):
#     def start(self):
#         print(f&quot;我的名字{self.name}&quot;)
#     def friend(self):
#         print(f&quot;我的朋友们{str(self.friends)}&quot;)
#
# people = People(**external_data)
#
# people.start()
# people.friend()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>pycharm安装pydantic插件</strong> <img src="`+v+`" alt=" image-20210202100216847 " loading="lazy"></p><p><strong>校验失败的处理</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
# 校验失败的处理
try:
    User(id=1,signup_list=datetime.today(),friends=[1,2,&#39;hello world&#39;])
except ValidationError as e:
    print(e.json())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印的结果</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
[
  {
    &quot;loc&quot;: [
      &quot;friends&quot;,
      2
    ],
    &quot;msg&quot;: &quot;value is not a valid integer&quot;,
    &quot;type&quot;: &quot;type_error.integer&quot;
  }
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>模型类的属性和方法</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
print(user.dict())
print(user.json())
print(user.copy())  # 这里是浅拷贝
print(User.parse_obj(external_data))
print(User.parse_raw(&#39;{&quot;id&quot;: &quot;123&quot;, &quot;signup_ts&quot;: &quot;2020-12-22 12:22&quot;, &quot;friends&quot;: [1, 2, &quot;3&quot;]}&#39;))

path = Path(&#39;pydantic_tutorial.json&#39;)
path.write_text(&#39;{&quot;id&quot;: &quot;123&quot;, &quot;signup_ts&quot;: &quot;2020-12-22 12:22&quot;, &quot;friends&quot;: [1, 2, &quot;3&quot;]}&#39;)
print(User.parse_file(path))

print(user.schema())
print(user.schema_json())

user_data = {&quot;id&quot;: &quot;error&quot;, &quot;signup_ts&quot;: &quot;2020-12-22 12 22&quot;, &quot;friends&quot;: [1, 2, 3]}  # id是字符串 是错误的
print(User.construct(**user_data))  # 不检验数据直接创建模型类，不建议在construct方法中传入未经验证的数据

print(User.__fields__.keys())  # 定义模型类的时候，所有字段都注明类型，字段顺序就不会乱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>递归模型</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
class Sound(BaseModel):
    sound: str

class Dog(BaseModel):
    birthday: date
    weight: float = Optional[None]
    sound: List[Sound]

dogs = Dog(birthday=date.today(),weight=9.99,sound=[{&quot;sound&quot;:&quot;wang wang~&quot;},{&quot;sound&quot;: &quot;ying ying ~&quot;}])
print(dogs.json())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
{&quot;birthday&quot;: &quot;2021-02-02&quot;, &quot;sound&quot;: [{&quot;sound&quot;: &quot;wang wang~&quot;}, {&quot;sound&quot;: &quot;ying ying ~&quot;}]}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ORM模型，从类实例创建符合ORM对象的模型</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Integer, String, Column

Base = declarative_base()

class CompanyOrm(Base):
    __tablename__ = &#39;companies&#39;
    id =Column(Integer, primary_key=True, nullable=True)
    public_key = Column(String(20), index=True, nullable=False, unique=True)
    name = Column(String(100), unique=True)
    domains = Column(ARRAY(String(255)))


class CompanyModel(BaseModel):
    id: int
    public_key: constr(max_length=20)
    name: constr(max_length=100)
    domains: List[constr(max_length=255)]

    class Config:
        orm_mode = True


co_orm = CompanyOrm(
    id=1,
    public_key=&quot;akey&quot;,
    name=&quot;andy&quot;,
    domains=[&#39;123.com&#39;, &#39;456.com&#39;]
)
print(CompanyModel.from_orm(co_orm))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第3章-请求参数和验证" tabindex="-1"><a class="header-anchor" href="#第3章-请求参数和验证"><span>第3章：请求参数和验证</span></a></h2><h3 id="_3-1fastapi的简单使用" tabindex="-1"><a class="header-anchor" href="#_3-1fastapi的简单使用"><span>3.1fastapi的简单使用</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class People(BaseModel):
    id: int
    name: str
    addr: Optional[str] = None


@app.get(&#39;/&#39;)
async def person():
    return {&quot;name&quot;: &quot;hello world&quot;}


@app.get(&#39;/city/{city}&#39;)
async def result(city: str, query_str: Optional[str] = None):
    return {&#39;city&#39;: city, &#39;query_str&#39;: query_str}


@app.post(&#39;/person/{person}&#39;)
async def result(person: str, city_info: People):
    return {&quot;person&quot;: person, &quot;id&quot;: city_info.id, &#39;name&#39;: city_info.name, &#39;addr&#39;: city_info.addr}

# 项目的启动
uvicorn 文件名:app --reload

# 接口文档的生成
localhost:8000/docs

# 展示接口的接口
localhost:8000/redoc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-fastapi的结构" tabindex="-1"><a class="header-anchor" href="#_3-2-fastapi的结构"><span>3.2 fastApi的结构</span></a></h3><p>首先创建一个文件包，用于存放各个app <img src="`+c+`" alt=" image-20210202145110225" loading="lazy"></p><p>然后再<strong>chapter03.py</strong>中实现</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
from enum import Enum

from fastapi import APIRouter

app03 = APIRouter()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他app一样的操作</p><p>在<em><strong>inif</strong>.py</em>文件中</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
from .chapter03 import app03
from .chapter04 import app04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在run.py文件中</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
import uvicorn
from fastapi import FastAPI
from tutorial import app03

app = FastAPI()

# 将app的子应用集成进来
app.include_router(app03, prefix=&#39;/chapter03&#39;, tags=[&#39;第三章，请求参数和验证&#39;])



if __name__ == &#39;__main__&#39;:
    uvicorn.run(&#39;run:app&#39;,host=&#39;0.0.0.0&#39;,port=8000,reload=True,debug=True,workers=1)

from enum import Enum
from typing import Optional, List
from fastapi import APIRouter, Query, Cookie, Header
from pydantic import BaseModel, Field
from datetime import date

app03 = APIRouter()

&quot;&quot;&quot;Path Parameters and Number Validations 路径参数和数字验证&quot;&quot;&quot;


@app03.get(&#39;/path/parameters&#39;)
def path_params01():
    return {&quot;message&quot;: &quot;This is a message&quot;}


@app03.get(&#39;/path/{parameters}&#39;)
def path_parameters02(parameters: str):
    return {&quot;message&quot;: parameters}


# 枚举
class CityName(str, Enum):
    Beijing = &quot;Beijing china&quot;
    Shanghai = &quot;Shanghai china&quot;


@app03.get(&#39;/enum/{city}&#39;)
async def latest(city: CityName):
    if city == CityName.Shanghai:
        return {&quot;city_name&quot;: city, &quot;confirmed&quot;: 1492, &quot;death&quot;: 7}
    elif city == CityName.Beijing:
        return {&#39;city_name&#39;: city, &quot;confirmed&quot;: 971, &quot;death&quot;: 9}
    return {&quot;city_name&quot;: city, &#39;latest&#39;: &quot;unknown&quot;}


@app03.get(&#39;/files/{filepath:path}&#39;)
def filepath(filepath: str):
    return f&quot;This file path is {filepath}&quot;


&quot;&quot;&quot;Query Parameters and String Validations 查询参数和字符串验证&quot;&quot;&quot;


@app03.get(&#39;/query&#39;)
def page_limit(page: int = 1, limit: Optional[int] = None):
    if limit:
        return {&#39;page&#39;: page, &#39;limit&#39;: limit}
    else:
        return {&quot;page&quot;: page}


@app03.get(&#39;/query/bool/conversion&#39;)  # bool类型转换：yes on 1 True true会转换成true, 其它为false
def query_params_validate(query: bool = False):
    return f&quot;返回的数据是{query}&quot;


@app03.get(&quot;/query/validations&quot;)
def query_params_validate(
        value: str = Query(..., min_length=8, max_length=16, regex=&quot;^a&quot;),
        values: List[str] = Query([&#39;V1&#39;, &#39;V2&#39;], alias=&quot;alias_name&quot;)
):
    return value, values


&quot;&quot;&quot;Request Body and Fields 请求体和字段&quot;&quot;&quot;


class CityInfo(BaseModel):
    name: str = Field(..., example=&quot;Beijing&quot;)  # example是注解的作用，值不会被验证
    country: str
    country_code: str = None  # 给一个默认值
    country_population: int = Field(default=800, title=&quot;人口数量&quot;, description=&quot;国家的人口数量&quot;, ge=800)

    class Config:
        schema_extra = {
            &quot;example&quot;: {
                &quot;name&quot;: &quot;Shanghai&quot;,
                &quot;country&quot;: &quot;China&quot;,
                &quot;country_code&quot;: &quot;CN&quot;,
                &quot;country_population&quot;: 1400000000,
            }
        }


@app03.post(&quot;/request_body/city&quot;)
def city_info(city: CityInfo):
    print(city.name, city.country)  # 当在IDE中输入city.的时候，属性会自动弹出
    return city.dict()


&quot;&quot;&quot;Request Body - Nested Nodels 数据格式嵌套的请求体&quot;&quot;&quot;


class Data(BaseModel):
    city: List[CityInfo] = None
    date: date
    confirmed: int = Field(ge=0, description=&quot;确诊数&quot;, default=0)
    deaths: int = Field(ge=0, description=&quot;死亡数&quot;, default=0)
    recovered: int = Field(ge=0, description=&quot;痊愈数&quot;, default=0)


@app03.put(&#39;/request_body/nested&#39;)
def nested_models(data: Data):
    return data


&quot;&quot;&quot;如何设置Cookie和Header参数&quot;&quot;&quot;


@app03.get(&quot;/cookie&quot;)  # 这个只能用postman测试，在Header中添加Cookie = cookie_id=xxx
# 定义Cookie参数需要使用Cookie类，否则就是查询参数
def cookie(cookie_id: Optional[str] = Cookie(None)):
    return cookie_id


@app03.get(&quot;/header&quot;)
def header(user_agent: Optional[str] = Header(None, convert_underscores=True), x_token: List[str] = Header(None)):
    &quot;&quot;&quot;
    有些HTTP代理和服务器是不允许在请求头中带有下划线的，所以Header提供convert_underscores属性让设置
    :param user_agent: convert_underscores=True 会把 user_agent 变成 user-agent
    :param x_token: x_token是包含多个值的列表
    :return:
    &quot;&quot;&quot;
    return {&quot;User-Agent&quot;: user_agent, &quot;x-Token&quot;: x_token}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询参数总的数据格式校验使用Query--from fastapi import Query</p><p>请求体中的参数校验使用Field---from pydantic import Field</p><p><strong>使用pandtic来定义请求体数据的时候使用Filed类,</strong></p><p><strong>使用路径参数的时候对数据进行校验使用Path类，</strong></p><p><strong>对查询参数进行校验的时候使用Query类</strong></p><h2 id="第4章-响应处理和fastapi配置" tabindex="-1"><a class="header-anchor" href="#第4章-响应处理和fastapi配置"><span>第4章 响应处理和FastAPI配置</span></a></h2><h3 id="_4-1响应模型示例精讲" tabindex="-1"><a class="header-anchor" href="#_4-1响应模型示例精讲"><span>4-1响应模型示例精讲</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
from fastapi import BaseModel
from pydantic import EmailStr
from typing import Option,List
&quot;&quot;&quot;4.1 Reponse Model响应模型&quot;&quot;&quot;


class UserIn(BaseModel):
    username: str
    password: str
    email: EmailStr
    mobile: str = &#39;110&#39;
    address: str = None
    full_name: Optional[str] = None


class UserOut(BaseModel):
    username: str
    email: EmailStr
    mobile: str = &#39;110&#39;
    address: str = None
    full_name: Optional[str] = None


users = {
    &quot;user01&quot;: {&quot;username&quot;: &quot;user01&quot;, &quot;password&quot;: &quot;123123&quot;, &quot;email&quot;: &quot;user01@example.com&quot;},
    &quot;user02&quot;: {&quot;username&quot;: &quot;user02&quot;, &quot;password&quot;: &quot;123456&quot;, &quot;email&quot;: &quot;user02@example.com&quot;, &quot;mobile&quot;: &quot;110&quot;}
}


@app04.post(&quot;/response_model&quot;, response_model=UserOut, response_model_exclude_unset=True)
async def response_model(user: UserIn):
    &quot;&quot;&quot;response_model_exclude_unset=True表示默认值不包含在响应中，仅包含实际给的值，如果实际给的值与默认值相同也会包含在响应中&quot;&quot;&quot;

    print(user.password)
    return users[&quot;user02&quot;]


@app04.post(
    &quot;/response_model/attributes&quot;,
    response_model=UserOut,  # 指定模型类
    # response_model=Union[UserIn, UserOut],  # 联合两个模型类
    # response_model=List[UserOut],  # 返回结果是一个列表，返回结果包含多个响应模型
    response_model_include=[&quot;username&quot;, &quot;email&quot;, &quot;mobile&quot;],  # 包含哪些字段
    response_model_exclude=[&quot;mobile&quot;]  # 过滤掉哪些字段
)
async def response_model_attributes(user: UserIn):
    &quot;&quot;&quot;response_model_include列出需要在返回结果中包含的字段；response_model_exclude列出需要在返回结果中排除的字段&quot;&quot;&quot;
    # del user.password  # Union[UserIn, UserOut]后，删除password属性也能返回成功
    return user
    # return [user, user]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2响应状态码和快捷属性" tabindex="-1"><a class="header-anchor" href="#_4-2响应状态码和快捷属性"><span>4.2响应状态码和快捷属性</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
from fastapi import status
&quot;&quot;&quot;Response Status Code 响应状态码&quot;&quot;&quot;

 
@app04.post(&quot;/status_code&quot;, status_code=200)
async def status_code():
    return {&quot;status_code&quot;: 200}


@app04.post(&quot;/status_attribute&quot;, status_code=status.HTTP_200_OK)
async def status_attribute():
    print(type(status.HTTP_200_OK))
    return {&quot;status_code&quot;: status.HTTP_200_OK}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3表单数据处理" tabindex="-1"><a class="header-anchor" href="#_4-3表单数据处理"><span>4.3表单数据处理</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
from fastapi import Form, File, UploadFile

&quot;&quot;&quot;Form Data 表单数据处理&quot;&quot;&quot;


@app04.post(&quot;/login/&quot;)
async def login(username: str = Form(...), password: str = Form(...)):  # 定义表单参数
    &quot;&quot;&quot;用Form类需要pip install python-multipart; Form类的元数据和校验方法类似Body/Query/Path/Cookie&quot;&quot;&quot;
    return {&quot;username&quot;: username}


&quot;&quot;&quot;Request Files 单文件、多文件上传及参数详解&quot;&quot;&quot;


@app04.post(&quot;/file&quot;)
async def file_(file: bytes = File(...)):  # 如果要上传多个文件 files: List[bytes] = File(...)
    &quot;&quot;&quot;使用File类 文件内容会以bytes的形式读入内存 适合于上传小文件&quot;&quot;&quot;
    return {&quot;file_size&quot;: len(file)}


@app04.post(&quot;/upload_files&quot;)
async def upload_files(files: List[UploadFile] = File(...)):  # 如果要上传单个文件 file: UploadFile = File(...)
    &quot;&quot;&quot;
    使用UploadFile类的优势:
    1.文件存储在内存中，使用的内存达到阈值后，将被保存在磁盘中
    2.适合于图片、视频大文件
    3.可以获取上传的文件的元数据，如文件名，创建时间等
    4.有文件对象的异步接口
    5.上传的文件是Python文件对象，可以使用write(), read(), seek(), close()操作
    &quot;&quot;&quot;
    for file in files:
        contents = await file.read()
        print(contents)
    return {&quot;filename&quot;: files[0].filename, &quot;content_type&quot;: files[0].content_type}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-fastapi项目的静态文件配置" tabindex="-1"><a class="header-anchor" href="#_4-4-fastapi项目的静态文件配置"><span>4.4 FastAPI项目的静态文件配置</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
# 在run.py中
from fastapi.staticfiles import StaticFiles
# mount表示将某个目录下一个完全独立的应用挂载过来，这个不会在API交互文档中显示
app.mount(path=&#39;corona/static&#39;,app=StaticFiles(directory=&#39;./corona/statuic&#39;),name=&quot;static&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-fastapi项目的静态文件配置-1" tabindex="-1"><a class="header-anchor" href="#_4-4-fastapi项目的静态文件配置-1"><span>4.4 FastAPI项目的静态文件配置</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
# 在run.py中
from fastapi.staticfiles import StaticFiles
# mount表示将某个目录下一个完全独立的应用挂载过来，这个不会在API交互文档中显示
app.mount(path=&#39;static&#39;,app=StaticFiles(directory=&#39;./corona/statuic&#39;),name=&quot;static&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-路径操作配置" tabindex="-1"><a class="header-anchor" href="#_4-5-路径操作配置"><span>4.5 路径操作配置</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
@app04.post(
    &quot;/path_operation_configuration&quot;,
    response_model=UserOut,  # 指定响应模型
    # tags=[&quot;Path&quot;, &quot;Operation&quot;, &quot;Configuration&quot;],
    summary=&quot;This is summary&quot;,  
    description=&quot;This is description&quot;,
    response_description=&quot;This is response description&quot;,
    deprecated=True,  # 表示该接口是否可用
    status_code=status.HTTP_200_OK  # 状态码
)
async def path_operation_configuration(user: UserIn):
    &quot;&quot;&quot;
    Path Operation Configuration 路径操作配置
    :param user: 用户信息
    :return: 返回结果
    &quot;&quot;&quot;
    return user.dict()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-fastapi-应用的常见配置项" tabindex="-1"><a class="header-anchor" href="#_4-6-fastapi-应用的常见配置项"><span>4.6 FastAPI 应用的常见配置项</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
# run.py
app = FastAPI(
    title=&#39;FastAPI Tutorial and Coronavirus Tracker API Docs&#39;,
    description=&#39;FastAPI教程 新冠病毒疫情跟踪器API接口文档，项目代码：https://github.com/liaogx/fastapi-tutorial&#39;,
    version=&#39;1.0.0&#39;,
    docs_url=&#39;/docs&#39;,
    redoc_url=&#39;/redocs&#39;,
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.7 fastapi的异常处理</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
from fastapi.exceptions import RequestValidationError
from fastapi.responses import PlainTextResponse
from starlette.exceptions import HTTPException as StarletteHTTPException

@app04.get(&quot;/http_exception&quot;)
async def http_exception(city: str):
    if city != &quot;Beijing&quot;:
        raise HTTPException(status_code=404, detail=&quot;City not found!&quot;, headers={&quot;X-Error&quot;: &quot;Error&quot;})
    return {&quot;city&quot;: city}


@app04.get(&quot;/http_exception/{city_id}&quot;)
async def override_http_exception(city_id: int):
    if city_id == 1:
        raise HTTPException(status_code=418, detail=&quot;Nope! I don&#39;t like 1.&quot;)
    return {&quot;city_id&quot;: city_id}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第5章-fastapi的依赖注入系统" tabindex="-1"><a class="header-anchor" href="#第5章-fastapi的依赖注入系统"><span>第5章：FastAPI的依赖注入系统</span></a></h2><h3 id="_5-1-依赖注入系统介绍和使用场景" tabindex="-1"><a class="header-anchor" href="#_5-1-依赖注入系统介绍和使用场景"><span>5.1 依赖注入系统介绍和使用场景</span></a></h3><p>”依赖注入“是指在编程中，为保证代码成功运行，先导入或声明其所需要的的“依赖”，如子函数，数据库连接等</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
1 提高代码的复用率
2 共享数据库链接
3 增强安全，认证和角色管理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>FastAPI的兼容性</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
1 所有的关系型数据库，支撑NoSQL数据库
2 第三方的包和API
3 认证和授权系统
4 响应数据注入系统
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-创建-导入和声明依赖" tabindex="-1"><a class="header-anchor" href="#_5-2-创建-导入和声明依赖"><span>5.2 创建，导入和声明依赖</span></a></h3><p>我们在Django或者Flask中对于参数的传递使用继承的方式，在FastAPI中我们可以使用声明依赖的方式</p><p>函数作为依赖</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
&quot;&quot;&quot;Dependencies 创建 ，导入和声明依赖&quot;&quot;&quot;

async def common_parameters(q: Optional[str] = None, page: int = 1, limit: int = 100):
    return {&quot;q&quot;: 1, &quot;page&quot;: page, &quot;limit&quot;: limit}

# 可以在async def中调用def依赖，也可以在def中导入async def依赖
@app05.get(&#39;/dependency01&#39;)
async def dependency01(commons: dict = Depends(common_parameters)):
    return commons


@app05.get(&#39;/dependency02&#39;)
def dependency02(commons: dict = Depends(common_parameters)):
    return commons
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-如何将类作为依赖性" tabindex="-1"><a class="header-anchor" href="#_5-3-如何将类作为依赖性"><span>5.3 如何将类作为依赖性</span></a></h3><p>类作为依赖</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
fake_itmes_db = [{&quot;item_name&quot;: &quot;Foo&quot;}, {&quot;item_name&quot;: &quot;Bar&quot;}, {&quot;item_name&quot;: &quot;Baz&quot;}, {&quot;item_name&quot;: &quot;Andy&quot;}]


class CommonQueryParams:
    def __init__(self, q: Optional[str] = None, page: int = 1, limit: int = 100):
        self.q = q
        self.page = page
        self.limit = limit


@app05.get(&#39;/classes_as_dependencies&#39;)
async def classes_as_dependencies(commons=Depends(CommonQueryParams)):
    response = {}
    if commons.q:
        response.update({&quot;q&quot;: commons.q})
    itmes = fake_itmes_db[commons.page:commons.limit]
    response.update({&#39;items&#39;: itmes})
    return response
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-自已来的创建和调用" tabindex="-1"><a class="header-anchor" href="#_5-4-自已来的创建和调用"><span>5.4 自已来的创建和调用</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
def query(q: Optional[str] = None):
    return q


def sub_query(q: str = Depends(query), last_query: Optional[str] = None):
    if not q:
        return last_query
    return q


@app05.get(&quot;/sub_dependency&quot;)
async def sub_dependency(final_query: str = Depends(sub_query, use_cache=True)):
    &quot;&quot;&quot;use_cache默认是True, 表示当多个依赖有一个共同的子依赖时，每次request请求只会调用子依赖一次，多次调用将从缓存中获取&quot;&quot;&quot;
    return {&quot;sub_dependency&quot;: final_query}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-路径操作装饰器中导入依赖" tabindex="-1"><a class="header-anchor" href="#_5-5-路径操作装饰器中导入依赖"><span>5-5 路径操作装饰器中导入依赖</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
&quot;&quot;&quot;路径操作装饰器中导入依赖&quot;&quot;&quot;


async def verify_token(x_token: str = Header(...)):
    if x_token != &quot;fake-super-secret-token&quot;:
        raise HTTPException(status_code=404, detail=&#39;X-Token header invalid&#39;)


async def verify_key(x_key: str = Header(...)):
    &quot;&quot;&quot;又返回值的子依赖，但是返回值不会被调用&quot;&quot;&quot;
    if x_key != &quot;fake-supplier-secret-token&quot;:
        raise HTTPException(status_code=400, detail=&quot;x_Key header invalid&quot;)
    return x_key


@app05.get(&#39;/dependency_in_path_operation&#39;, dependencies=[Depends(verify_token), Depends(verify_key)])
async def dependency_in_path_operation():
    return {&quot;fuck&quot;: &quot;fuck&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-fastapi框架中全局依赖的使用" tabindex="-1"><a class="header-anchor" href="#_5-6-fastapi框架中全局依赖的使用"><span>5.6 FastAPI框架中全局依赖的使用</span></a></h3><p>我们不光可以在单个接口中添加依赖，用来验证token护着sercet_key</p><p>也可以在子应用中添加</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
app05 = APIRouter(dependencies=[Depends(verify_token),Depends(verify_key)])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以在全局app中添加依赖</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
app = FastAPI(dependencies=[Depends(verify_token),Depends(verify_key)])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其实这样就可以对我们的接口进行权限之类的校验了</p><h3 id="_5-7-使用yield的依赖和子依赖" tabindex="-1"><a class="header-anchor" href="#_5-7-使用yield的依赖和子依赖"><span>5.7 使用yield的依赖和子依赖</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
&quot;&quot;&quot;Dependencies with yield 带yield的依赖&quot;&quot;&quot;


# 这个需要Python3.7才支持，Python3.6需要pip install async-exit-stack async-generator
# 以下都是伪代码

async def get_db():
    db = &quot;db_connection&quot;
    try:
        yield db
    finally:
        db.endswith(&quot;db_close&quot;)


async def dependency_a():
    dep_a = &quot;generate_dep_a()&quot;
    try:
        yield dep_a
    finally:
        dep_a.endswith(&quot;db_close&quot;)


async def dependency_b(dep_a=Depends(dependency_a)):
    dep_b = &quot;generate_dep_b()&quot;
    try:
        yield dep_b
    finally:
        dep_b.endswith(dep_a)


async def dependency_c(dep_b=Depends(dependency_b)):
    dep_c = &quot;generate_dep_c()&quot;
    try:
        yield dep_c
    finally:
        dep_c.endswith(dep_b)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第6章-安全、认证和授权" tabindex="-1"><a class="header-anchor" href="#第6章-安全、认证和授权"><span>第6章：安全、认证和授权</span></a></h2><h3 id="_6-1-oauth2-密码模式和-fastapi-的-oauth2passwordbearer" tabindex="-1"><a class="header-anchor" href="#_6-1-oauth2-密码模式和-fastapi-的-oauth2passwordbearer"><span>6.1 OAuth2 密码模式和 FastAPI 的 OAuth2PasswordBearer</span></a></h3><figure><img src="`+o+`" alt=" image-20210204152011882" tabindex="0" loading="lazy"><figcaption> image-20210204152011882</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
&quot;&quot;&quot;OAuth2 密码模式和 FastAPI 的 OAuth2PasswordBearer&quot;&quot;&quot;

&quot;&quot;&quot;
OAuth2PasswordBearer是接收URL作为参数的一个类：客户端会向该URL发送username和password参数，然后得到一个Token值
OAuth2PasswordBearer并不会创建相应的URL路径操作，只是指明客户端用来请求Token的URL地址
当请求到来的时候，FastAPI会检查请求的Authorization头信息，如果没有找到Authorization头信息，或者头信息的内容不是Bearer token，它会返回401状态码(UNAUTHORIZED)
&quot;&quot;&quot;
oauth2_schema = OAuth2PasswordBearer(tokenUrl=&quot;/chapter06/token&quot;)


@app06.get(&#39;/oauth2_password_bearer&#39;)
async def oauth2_password_bearer(token: str = Depends(oauth2_schema)):
    return {&quot;token&quot;: token}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-基于-password-和-bearer-token-的-oauth2-认证" tabindex="-1"><a class="header-anchor" href="#_6-2-基于-password-和-bearer-token-的-oauth2-认证"><span>6.2 基于 Password 和 Bearer token 的 OAuth2 认证</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
&quot;&quot;&quot;OAuth2 密码模式和 FastAPI 的 OAuth2PasswordBearer&quot;&quot;&quot;

&quot;&quot;&quot;
OAuth2PasswordBearer是接收URL作为参数的一个类：客户端会向该URL发送username和password参数，然后得到一个Token值
OAuth2PasswordBearer并不会创建相应的URL路径操作，只是指明客户端用来请求Token的URL地址
当请求到来的时候，FastAPI会检查请求的Authorization头信息，如果没有找到Authorization头信息，或者头信息的内容不是Bearer token，它会返回401状态码(UNAUTHORIZED)
&quot;&quot;&quot;

oauth2_schema = OAuth2PasswordBearer(tokenUrl=&quot;/chapter06/token&quot;)  # 请求Token的URL地址 http://127.0.0.1:8000/chapter06/token


@app06.get(&quot;/oauth2_password_bearer&quot;)
async def oauth2_password_bearer(token: str = Depends(oauth2_schema)):
    return {&quot;token&quot;: token}


&quot;&quot;&quot;基于 Password 和 Bearer token 的 OAuth2 认证&quot;&quot;&quot;

fake_users_db = {
    &quot;john snow&quot;: {
        &quot;username&quot;: &quot;john snow&quot;,
        &quot;full_name&quot;: &quot;John Snow&quot;,
        &quot;email&quot;: &quot;johnsnow@example.com&quot;,
        &quot;hashed_password&quot;: &quot;fakehashedsecret&quot;,
        &quot;disabled&quot;: False,
    },
    &quot;alice&quot;: {
        &quot;username&quot;: &quot;alice&quot;,
        &quot;full_name&quot;: &quot;Alice Wonderson&quot;,
        &quot;email&quot;: &quot;alice@example.com&quot;,
        &quot;hashed_password&quot;: &quot;fakehashedsecret2&quot;,
        &quot;disabled&quot;: True,
    },
}


def fake_hash_password(password: str):
    return &quot;fakehashed&quot; + password


class User(BaseModel):
    username: str
    email: Optional[str] = None
    full_name: Optional[str] = None
    disabled: Optional[bool] = None


class UserInDB(User):
    hashed_password: str


@app06.post(&quot;/token&quot;)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user_dict = fake_users_db.get(form_data.username)
    if not user_dict:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=&quot;Incorrect username or password&quot;)
    user = UserInDB(**user_dict)
    hashed_password = fake_hash_password(form_data.password)
    if not hashed_password == user.hashed_password:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=&quot;Incorrect username or password&quot;)
    return {&quot;access_token&quot;: user.username, &quot;token_type&quot;: &quot;bearer&quot;}


def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)


def fake_decode_token(token: str):
    user = get_user(fake_users_db, token)
    return user


async def get_current_user(token: str = Depends(oauth2_schema)):
    user = fake_decode_token(token)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=&quot;Invalid authentication credentials&quot;,
            headers={&quot;WWW-Authenticate&quot;: &quot;Bearer&quot;},  # OAuth2的规范，如果认证失败，请求头中返回“WWW-Authenticate”
        )
    return user


async def get_current_active_user(current_user: User = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=&quot;Inactive user&quot;)
    return current_user


@app06.get(&quot;/users/me&quot;)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user


fake_users_db.update({
    &quot;john snow&quot;: {
        &quot;username&quot;: &quot;john snow&quot;,
        &quot;full_name&quot;: &quot;John Snow&quot;,
        &quot;email&quot;: &quot;johnsnow@example.com&quot;,
        &quot;hashed_password&quot;: &quot;$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW&quot;,
        &quot;disabled&quot;: False,
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-开发基于-json-web-tokens-的认证" tabindex="-1"><a class="header-anchor" href="#_6-3-开发基于-json-web-tokens-的认证"><span>6.3 开发基于 JSON Web Tokens 的认证</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
&quot;&quot;&quot;OAuth2 with Password (and hashing), Bearer with JWT tokens 开发基于JSON Web Tokens的认证&quot;&quot;&quot;
SECRET_KEY = &quot;09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7&quot;  # 生成密钥 openssl rand -hex 32
ALGORITHM = &quot;HS256&quot;  # 算法
ACCESS_TOKEN_EXPIRE_MINUTES = 30  # 访问令牌过期分钟


class Token(BaseModel):
    &quot;&quot;&quot;返回给用户的Token&quot;&quot;&quot;
    access_token: str
    token_type: str


pwd_context = CryptContext(schemes=[&#39;bcrypt&#39;], deprecated=&#39;auto&#39;)
oauth2_schema = OAuth2PasswordBearer(tokenUrl=&#39;/chapter06/jwt/token&#39;)


def verify_password(plain_password, hashed_password):
    &quot;&quot;&quot;对密码进行校验&quot;&quot;&quot;
    return pwd_context.verify(plain_password, hashed_password)


def jwt_get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)


def jwt_authenticate_user(db, username: str, password: str):
    user = jwt_get_user(db, username)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({&#39;exp&#39;: expire})
    encode_jwt = jwt.encode(claims=to_encode, key=SECRET_KEY, algorithm=ALGORITHM)
    return encode_jwt


@app06.post(&#39;/jwt/token&#39;, response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = jwt_authenticate_user(db=fake_users_db, username=form_data.username, password=form_data.password)
    if not user:
        raise HTTPException(
            status.HTTP_401_UNAUTHORIZED,
            detail=&quot;Incorrect username or password&quot;,
            headers={&quot;WWW-Authenticate&quot;: &quot;Bearer&quot;},
        )
    # 获取Token的过期时间
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={&quot;sub&quot;: user.username},
        expires_delta=access_token_expires
    )
    return {&quot;access_token&quot;: access_token, &quot;token_type&quot;: &quot;bearer&quot;}


async def jwt_get_current_user(token: str = Depends(oauth2_schema)):
    credentials_exception = HTTPException(
        status.HTTP_401_UNAUTHORIZED,
        detail=&quot;Could not validate credentials&quot;,
        headers={&quot;WWW-Authenticate&quot;: &quot;Bearer&quot;},
    )
    try:
        payload = jwt.decode(token=token, key=SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get(&quot;sub&quot;)
        if username is None:
            raise credentials_exception

    except JWTError:
        raise credentials_exception

    user = jwt_get_user(db=fake_users_db, username=username)
    if user is None:
        raise credentials_exception
    return user


async def jwt_get_current_active_user(current_user: User = Depends(jwt_get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=&quot;Inactive user&quot;)
    return current_user


@app06.get(&quot;/jwt/users/me&quot;)
async def jwt_read_users_me(current_user: User = Depends(jwt_get_current_active_user)):
    return current_user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第7章-fastapi的数据库操作和多应用的目录结构设计" tabindex="-1"><a class="header-anchor" href="#第7章-fastapi的数据库操作和多应用的目录结构设计"><span>第7章 FastAPI的数据库操作和多应用的目录结构设计</span></a></h2><p>项目结构</p><figure><img src="`+m+`" alt="image-20210204205745513" tabindex="0" loading="lazy"><figcaption>image-20210204205745513</figcaption></figure><h3 id="_7-1-flastapi中配置sqlalchemy数据库操作" tabindex="-1"><a class="header-anchor" href="#_7-1-flastapi中配置sqlalchemy数据库操作"><span>7.1 FlastAPI中配置SQLAlchemy数据库操作</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
# database.py


from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = &#39;sqlite:///./coronavirus.sqlite3&#39;
# SQLALCHEMY_DATABASE_URL = &quot;postgresql://username:password@host:port/database_name&quot;  # MySQL或PostgreSQL的连接方法

engine = create_engine(
    # echo=True表示引擎将用repr()函数记录所有语句及其参数列表到日志
    # 由于SQLAlchemy是多线程，指定check_same_thread=False来让建立的对象任意线程都可使用。这个参数只在用SQLite数据库时设置
    SQLALCHEMY_DATABASE_URL, encoding=&#39;utf-8&#39;, echo=True, connect_args={&#39;check_same_thread&#39;: False}
)

# 在SQLAlchemy中，CRUD都是通过会话(session)进行的，所以我们必须要先创建会话，每一个SessionLocal实例就是一个数据库session
# flush()是指发送数据库语句到数据库，但数据库不一定执行写入磁盘；commit()是指提交事务，将变更保存到数据库文件
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False, expire_on_commit=True)

# 创建基本映射类
Base = declarative_base(bind=engine, name=&#39;Base&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-sqlalchemy模型类开发" tabindex="-1"><a class="header-anchor" href="#_7-2-sqlalchemy模型类开发"><span>7.2 SQLAlchemy模型类开发</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
# models.py

from sqlalchemy import Column, String, Integer, BigInteger, Date, DateTime, ForeignKey, func
from sqlalchemy.orm import relationship

from .database import Base


class City(Base):
    __tablename__ = &#39;city&#39;  # 数据表的表名

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    province = Column(String(100), unique=True, nullable=False, comment=&#39;省/直辖市&#39;)
    country = Column(String(100), nullable=False, comment=&#39;国家&#39;)
    country_code = Column(String(100), nullable=False, comment=&#39;国家代码&#39;)
    country_population = Column(BigInteger, nullable=False, comment=&#39;国家人口&#39;)
    data = relationship(&#39;Data&#39;, back_populates=&#39;city&#39;)  # &#39;Data&#39;是关联的类名；back_populates来指定反向访问的属性名称

    created_at = Column(DateTime, server_default=func.now(), comment=&#39;创建时间&#39;)
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now(), comment=&#39;更新时间&#39;)

    __mapper_args__ = {&quot;order_by&quot;: country_code}  # 默认是正序，倒序加上.desc()方法

    def __repr__(self):
        return f&#39;{self.country}_{self.province}&#39;


class Data(Base):
    __tablename__ = &#39;data&#39;

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    city_id = Column(Integer, ForeignKey(&#39;city.id&#39;), comment=&#39;所属省/直辖市&#39;)  # ForeignKey里的字符串格式不是类名.属性名，而是表名.字段名
    date = Column(Date, nullable=False, comment=&#39;数据日期&#39;)
    confirmed = Column(BigInteger, default=0, nullable=False, comment=&#39;确诊数量&#39;)
    deaths = Column(BigInteger, default=0, nullable=False, comment=&#39;死亡数量&#39;)
    recovered = Column(BigInteger, default=0, nullable=False, comment=&#39;痊愈数量&#39;)
    city = relationship(&#39;City&#39;, back_populates=&#39;data&#39;)  # &#39;City&#39;是关联的类名；back_populates来指定反向访问的属性名称

    created_at = Column(DateTime, server_default=func.now(), comment=&#39;创建时间&#39;)
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now(), comment=&#39;更新时间&#39;)

    __mapper_args__ = {&quot;order_by&quot;: date.desc()}  # 按日期降序排列

    def __repr__(self):
        return f&#39;{repr(self.date)}：确诊{self.confirmed}例&#39;


&quot;&quot;&quot; 附上三个SQLAlchemy教程

SQLAlchemy的基本操作大全 
    http://www.taodudu.cc/news/show-175725.html

Python3+SQLAlchemy+Sqlite3实现ORM教程 
    https://www.cnblogs.com/jiangxiaobo/p/12350561.html

SQLAlchemy基础知识 Autoflush和Autocommit
    https://zhuanlan.zhihu.com/p/48994990
&quot;&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-pydantic建立与模型类对应的数据格式类" tabindex="-1"><a class="header-anchor" href="#_7-3-pydantic建立与模型类对应的数据格式类"><span>7.3 Pydantic建立与模型类对应的数据格式类</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
&quot;&quot;&quot;规范数据格式&quot;&quot;&quot;
# schemas.py

from datetime import date as date_
from datetime import datetime

from pydantic import BaseModel


class CreateData(BaseModel):
    date: date_
    confirmed: int = 0
    deaths: int = 0
    recovered: int = 0


class CreateCity(BaseModel):
    province: str
    country: str
    country_code: str
    country_population: int


class ReadData(CreateData):
    id: int
    city_id: int
    updated_at: datetime
    created_at: datetime

    class Config:
        orm_mode = True


class ReadCity(CreateCity):
    id: int
    updated_at: datetime
    created_at: datetime

    class Config:
        orm_mode = True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-把创建和查询的函数进行封装" tabindex="-1"><a class="header-anchor" href="#_7-4-把创建和查询的函数进行封装"><span>7.4 把创建和查询的函数进行封装</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
# crud.py


from sqlalchemy.orm import Session
from corona import models, schemas


# 根据id查询城市
def get_city(db: Session, city_id: int):
    return db.query(models.City).filter(models.City.id == city_id).first()


# 根据城市名字查询城市
def get_city_by_name(db: Session, name: str):
    return db.query(models.City).filter(models.City.province == name).first()


# 查询一定数量的城市
def get_cities(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.City).offset(skip).limit(limit).all()


# 创建城市
def create_city(db: Session, city: schemas.CreateCity):
    db_city = models.City(**city.dict())
    db.add(db_city)
    db.commit()
    db.refresh(db_city)
    return db_city


# 获取数据
def get_data(db: Session, city: str = None, skip: int = 0, limit: int = 100):
    if city:
        return db.query(models.Data).filter(models.Data.has(province=city))
    return db.query(models.Data).offset(skip).limit(limit).all()


# 创建数据
def create_city_data(db: Session, data: schemas.CreateCity, city_id: int):
    db_data = models.Data(**data.dict(), city_id=city_id)
    db.add(db_data)
    db.commit()
    db.refresh(db_data)
    return db_data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-jinjia2渲染前端页面" tabindex="-1"><a class="header-anchor" href="#_7-5-jinjia2渲染前端页面"><span>7.5 Jinjia2渲染前端页面</span></a></h3><p><strong>main.py</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
#!/usr/bin/python3
# -*- coding:utf-8 -*-
# __author__ = &#39;__Jack__&#39;

from typing import List

import requests
from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks, Request
from fastapi.templating import Jinja2Templates
from pydantic import HttpUrl
from sqlalchemy.orm import Session

from coronavirus import crud, schemas
from coronavirus.database import engine, Base, SessionLocal
from coronavirus.models import City, Data

application = APIRouter()

templates = Jinja2Templates(directory=&#39;./coronavirus/templates&#39;)

Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@application.post(&quot;/create_city&quot;, response_model=schemas.ReadCity)
def create_city(city: schemas.CreateCity, db: Session = Depends(get_db)):
    db_city = crud.get_city_by_name(db, name=city.province)
    if db_city:
        raise HTTPException(status_code=400, detail=&quot;City already registered&quot;)
    return crud.create_city(db=db, city=city)


@application.get(&quot;/get_city/{city}&quot;, response_model=schemas.ReadCity)
def get_city(city: str, db: Session = Depends(get_db)):
    db_city = crud.get_city_by_name(db, name=city)
    if db_city is None:
        raise HTTPException(status_code=404, detail=&quot;City not found&quot;)
    return db_city


@application.get(&quot;/get_cities&quot;, response_model=List[schemas.ReadCity])
def get_cities(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    cities = crud.get_cities(db, skip=skip, limit=limit)
    return cities


@application.post(&quot;/create_data&quot;, response_model=schemas.ReadData)
def create_data_for_city(city: str, data: schemas.CreateData, db: Session = Depends(get_db)):
    db_city = crud.get_city_by_name(db, name=city)
    data = crud.create_city_data(db=db, data=data, city_id=db_city.id)
    return data


@application.get(&quot;/get_data&quot;)
def get_data(city: str = None, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    data = crud.get_data(db, city=city, skip=skip, limit=limit)
    return data


def bg_task(url: HttpUrl, db: Session):
    &quot;&quot;&quot;这里注意一个坑，不要在后台任务的参数中db: Session = Depends(get_db)这样导入依赖&quot;&quot;&quot;

    city_data = requests.get(url=f&quot;{url}?source=jhu&amp;country_code=CN&amp;timelines=false&quot;)

    if 200 == city_data.status_code:
        db.query(City).delete()  # 同步数据前先清空原有的数据
        for location in city_data.json()[&quot;locations&quot;]:
            city = {
                &quot;province&quot;: location[&quot;province&quot;],
                &quot;country&quot;: location[&quot;country&quot;],
                &quot;country_code&quot;: &quot;CN&quot;,
                &quot;country_population&quot;: location[&quot;country_population&quot;]
            }
            crud.create_city(db=db, city=schemas.CreateCity(**city))

    coronavirus_data = requests.get(url=f&quot;{url}?source=jhu&amp;country_code=CN&amp;timelines=true&quot;)

    if 200 == coronavirus_data.status_code:
        db.query(Data).delete()
        for city in coronavirus_data.json()[&quot;locations&quot;]:
            db_city = crud.get_city_by_name(db=db, name=city[&quot;province&quot;])
            for date, confirmed in city[&quot;timelines&quot;][&quot;confirmed&quot;][&quot;timeline&quot;].items():
                data = {
                    &quot;date&quot;: date.split(&quot;T&quot;)[0],  # 把&#39;2020-12-31T00:00:00Z&#39; 变成 ‘2020-12-31’
                    &quot;confirmed&quot;: confirmed,
                    &quot;deaths&quot;: city[&quot;timelines&quot;][&quot;deaths&quot;][&quot;timeline&quot;][date],
                    &quot;recovered&quot;: 0  # 每个城市每天有多少人痊愈，这种数据没有
                }
                # 这个city_id是city表中的主键ID，不是coronavirus_data数据里的ID
                crud.create_city_data(db=db, data=schemas.CreateData(**data), city_id=db_city.id)


@application.get(&quot;/sync_coronavirus_data/jhu&quot;)
def sync_coronavirus_data(background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    &quot;&quot;&quot;从Johns Hopkins University同步COVID-19数据&quot;&quot;&quot;
    background_tasks.add_task(bg_task, &quot;https://coronavirus-tracker-api.herokuapp.com/v2/locations&quot;, db)
    return {&quot;message&quot;: &quot;正在后台同步数据...&quot;}


@application.get(&quot;/&quot;)
def coronavirus(request: Request, city: str = None, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    data = crud.get_data(db, city=city, skip=skip, limit=limit)
    return templates.TemplateResponse(&quot;home.html&quot;, {
        &quot;request&quot;: request,
        &quot;data&quot;: data,
        &quot;sync_data_url&quot;: &quot;/coronavirus/sync_coronavirus_data/jhu&quot;
    })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>home.html</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;title&gt;新冠病毒疫情跟踪器&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;{{ url_for(&#39;static&#39;, path=&#39;/semantic.min.css&#39;) }}&quot;&gt;
    &lt;script src=&quot;{{ url_for(&#39;static&#39;, path=&#39;/jquery-3.5.1/jquery-3.5.1.min.js&#39;) }}&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;{{ url_for(&#39;static&#39;, path=&#39;/semantic.min.js&#39;) }}&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
        $(document).ready(function () {
            $(&quot;#filter&quot;).click(function () {
                const city = $(&quot;#city&quot;).val();
                window.location.href = &quot;http://&quot; + window.location.host + &quot;/coronavirus?city=&quot; + city;
            });
            $(&quot;#sync&quot;).click(function () {
                $.get(&quot;{{ sync_data_url }}&quot;, function (result) {
                    alert(&quot;Message: &quot; + result.message);
                });
            });
        });
    &lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;div class=&quot;ui container&quot;&gt;
    &lt;h2&gt;&lt;/h2&gt;
    &lt;h1 style=&quot;text-align: center&quot;&gt;新冠病毒疫情跟踪器&lt;/h1&gt;
    &lt;h2&gt;&lt;/h2&gt;

    &lt;button id=&quot;filter&quot; style=&quot;float: left&quot; type=&quot;submit&quot; class=&quot;ui button alert-secondary&quot;&gt;过滤&lt;/button&gt;

    &lt;div class=&quot;ui input&quot;&gt;
        &lt;label for=&quot;city&quot;&gt;&lt;/label&gt;&lt;input id=&quot;city&quot; type=&quot;text&quot; placeholder=&quot;城市&quot; value=&quot;&quot;&gt;
    &lt;/div&gt;

    &lt;button id=&quot;sync&quot; style=&quot;float: right&quot; type=&quot;submit&quot; class=&quot;ui button primary&quot;&gt;同步数据&lt;/button&gt;

    &lt;table class=&quot;ui celled table&quot;&gt;
        &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;城市&lt;/th&gt;
            &lt;th&gt;日期&lt;/th&gt;
            &lt;th&gt;累计确诊数&lt;/th&gt;
            &lt;th&gt;累计死亡数&lt;/th&gt;
            &lt;th&gt;累计痊愈数&lt;/th&gt;
            &lt;th&gt;更新时间&lt;/th&gt;
        &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody&gt;
        {% for d in data %}
        &lt;tr&gt;
            &lt;td&gt;{{ d.city.province }}&lt;/td&gt;
            &lt;td&gt;{{ d.date }}&lt;/td&gt;
            &lt;td&gt;{{ d.confirmed }}&lt;/td&gt;
            &lt;td&gt;{{ d.deaths }}&lt;/td&gt;
            &lt;td&gt;{{ d.recovered }}&lt;/td&gt;
            &lt;td&gt;{{ d.updated_at }}&lt;/td&gt;
        &lt;/tr&gt;
        {% endfor %}
        &lt;/tbody&gt;
    &lt;/table&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-6-大型工程木路结构设计-应用文件拆分" tabindex="-1"><a class="header-anchor" href="#_7-6-大型工程木路结构设计-应用文件拆分"><span>7.6 大型工程木路结构设计-应用文件拆分</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
from fastapi import APIRouter, Depends, Request

&quot;&quot;&quot;【见coronavirus应用】SQL (Relational) Databases FastAPI的数据库操作&quot;&quot;&quot;

&quot;&quot;&quot;Bigger Applications - Multiple Files 多应用的目录结构设计&quot;&quot;&quot;


async def get_user_agent(request: Request):
    print(request.headers[&quot;User-Agent&quot;])


app07 = APIRouter(
    prefix=&quot;/bigger_applications&quot;,
    tags=[&quot;第七章 FastAPI的数据库操作和多应用的目录结构设计&quot;],  # 与run.py中的tags名称相同
    dependencies=[Depends(get_user_agent)],
    responses={200: {&quot;description&quot;: &quot;Good job!&quot;}},
)


@app07.get(&quot;/bigger_applications&quot;)
async def bigger_applications():
    return {&quot;message&quot;: &quot;Bigger Applications - Multiple Files&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第八章-中间件、cors、后台任务、测试用例" tabindex="-1"><a class="header-anchor" href="#第八章-中间件、cors、后台任务、测试用例"><span>第八章： 中间件、CORS、后台任务、测试用例</span></a></h2><h3 id="_8-1-中间件的概念和开发示例" tabindex="-1"><a class="header-anchor" href="#_8-1-中间件的概念和开发示例"><span>8.1 中间件的概念和开发示例</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
# run.py

from fastapi import FastAPI, Request
app = FastAPI(
    title=&#39;FastAPI Tutorial and Coronavirus Tracker API Docs&#39;,
    description=&#39;FastAPI教程 新冠病毒疫情跟踪器API接口文档，项目代码：https://github.com/liaogx/fastapi-tutorial&#39;,
    version=&#39;1.0.0&#39;,
    docs_url=&#39;/docs&#39;,
    redoc_url=&#39;/redocs&#39;,
)

@app.middleware(&#39;http&#39;)
async def add_process_time_header(request: Request, call_next):  # call_next将接收request请求做为参数
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers[&#39;X-Process-Time&#39;] = str(process_time)  # 添加自定义的以“X-”开头的请求头
    return response
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-关于资源共享cors的原理" tabindex="-1"><a class="header-anchor" href="#_8-2-关于资源共享cors的原理"><span>8.2 关于资源共享CORS的原理</span></a></h3><p>直白的说就是我们跨站点了，js请求发生冲突或者不允许</p><h3 id="_8-3-fastapi的corsmiddleware实现方式" tabindex="-1"><a class="header-anchor" href="#_8-3-fastapi的corsmiddleware实现方式"><span>8.3 FastAPI的CORSMiddleware实现方式</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
# run.py
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        &quot;http://127.0.0.1&quot;,
        &quot;http://127.0.0.1:8080&quot;
    ],
    allow_credentials=True,
    allow_methods=[&quot;*&quot;],
    allow_headers=[&quot;*&quot;],
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-fastapi实现蕾西celery的后台任务" tabindex="-1"><a class="header-anchor" href="#_8-4-fastapi实现蕾西celery的后台任务"><span>8.4 FastAPI实现蕾西Celery的后台任务</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
from typing import Optional

from fastapi import APIRouter, BackgroundTasks, Depends

app08 = APIRouter()

&quot;&quot;&quot;【见run.py】Middleware 中间件&quot;&quot;&quot;

# 注：带yield的依赖的退出部分的代码 和 后台任务 会在中间件之后运行

&quot;&quot;&quot;【见run.py】CORS (Cross-Origin Resource Sharing) 跨源资源共享&quot;&quot;&quot;

# 域的概念：协议+域名+端口

&quot;&quot;&quot;Background Tasks 后台任务&quot;&quot;&quot;


def bg_task(framework: str):
    with open(&quot;README.md&quot;, mode=&quot;a&quot;) as f:
        f.write(f&quot;## {framework} 框架精讲&quot;)


@app08.post(&quot;/background_tasks&quot;)
async def run_bg_task(framework: str, background_tasks: BackgroundTasks):
    &quot;&quot;&quot;
    :param framework: 被调用的后台任务函数的参数
    :param background_tasks: FastAPI.BackgroundTasks
    :return:
    &quot;&quot;&quot;
    background_tasks.add_task(bg_task, framework)
    return {&quot;message&quot;: &quot;任务已在后台运行&quot;}


def continue_write_readme(background_tasks: BackgroundTasks, q: Optional[str] = None):
    if q:
        background_tasks.add_task(bg_task, &quot;\\n&gt; 整体的介绍 FastAPI，快速上手开发，结合 API 交互文档逐个讲解核心模块的使用\\n&quot;)
    return q


@app08.post(&quot;/dependency/background_tasks&quot;)
async def dependency_run_bg_task(q: str = Depends(continue_write_readme)):
    if q:
        return {&quot;message&quot;: &quot;README.md更新成功&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5-后台任务更新" tabindex="-1"><a class="header-anchor" href="#_8-5-后台任务更新"><span>8.5 后台任务更新</span></a></h3><p>见7.5main.py</p><h3 id="_8-6-testclient编写测试用例" tabindex="-1"><a class="header-anchor" href="#_8-6-testclient编写测试用例"><span>8.6 TestClient编写测试用例</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
from fastapi.testclient import TestClient

from run import app

&quot;&quot;&quot;Testing 测试用例&quot;&quot;&quot;

client = TestClient(app)  # 先pip install pytest


def test_run_bg_task():  # 函数名用“test_”开头是 pytest 的规范。注意不是async def
    response = client.post(url=&quot;/chapter08/background_tasks?framework=FastAPI&quot;)
    assert response.status_code == 200
    assert response.json() == {&quot;message&quot;: &quot;任务已在后台运行&quot;}


def test_dependency_run_bg_task():
    response = client.post(url=&quot;/chapter08/dependency/background_tasks&quot;)
    assert response.status_code == 200
    assert response.json() is None


def test_dependency_run_bg_task_q():
    response = client.post(url=&quot;/chapter08/dependency/background_tasks?q=1&quot;)
    assert response.status_code == 200
    assert response.json() == {&quot;message&quot;: &quot;README.md更新成功&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,115);function h(g,f){const s=a("ExternalLinkIcon");return t(),l("div",null,[p,i("p",null,[e("安装环境，python环境必须是3.6以上的，然后去github中将"),i("a",q,[e("github.com/liaogx/fastapi-tutorial"),r(s)]),e(" 拷贝下来，安装reqiurements.txt里面的包")]),_])}const k=d(b,[["render",h],["__file","FastAPI-Python高性能web框架.html.vue"]]);export{k as default};
