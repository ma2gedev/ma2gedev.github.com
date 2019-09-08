import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="ls ma2ge{,dev}" />
    <h2>About Me</h2>
    <div style={{ maxWidth: `150px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>{data.meYaml.name} @{data.meYaml.sns}</p>
    <p>{data.meYaml.job}</p>
    <h3>Likes</h3>
    <ul>
    {data.meYaml.likes.map(like => {
      return <li>{like}</li>
    })}
    </ul>
    <hr/>
    <h2>Career</h2>
    {data.allCareerYaml.edges.map(edge => {
      const career = edge.node
      return <div>
        <h3>{career.name}</h3>
        {career.works.map(work => {
          return <ul>
            <li>{work.between} {work.title}
              <ul>
                <li>{work.main}</li>
                <li>{work.technologies.join(", ")}</li>
              </ul>
            </li>
          </ul>
        })}
      </div>
    })}
    <hr/>
    <h2>Open Source Software</h2>
    <ul>
    {data.allOssYaml.edges.map(edge => {
      const oss = edge.node
      return <li>
        <a href={oss.uri}>{oss.name}</a>
      </li>
    })}
    </ul>
    <hr/>
    <h2>Talks</h2>
    <ul>
    {data.allTalksYaml.edges.map(edge => {
      const talk = edge.node
      return <li>
        {talk.country} {talk.year} <a href={talk.uri}>{talk.title}</a> at <a href={talk.event.uri}>{talk.event.name}</a>
      </li>
    })}
    </ul>
    <hr/>
    <h2>Books</h2>
    <ul>
    {data.allBooksYaml.edges.map(edge => {
      const book = edge.node
      return <li>
        {book.year} <a href={book.uri}>{book.title}</a> {book.author}
        <ul>
          <li><p>{book.work_as}</p></li>
        </ul>
      </li>
    })}
    </ul>
    <hr/>
    <h2>Links</h2>
    <ul>
    {data.allSocialYaml.edges.map(edge => {
      const social = edge.node
      return <li>
        <a href={social.uri}>{social.name}</a>
      </li>
    })
    }
    </ul>
    <hr/>
    <h2>Contacts</h2>
    <p><a href="https://twitter.com/ma2ge">@{data.meYaml.sns}</a></p>
  </Layout>
)

export const query = graphql`
query {
  meYaml {
    name
    sns
    job
    likes
  }
  allSocialYaml {
    edges {
      node {
        name
        account
        uri
      }
    }
  }
  allCareerYaml {
    edges {
      node {
        name
        works {
          title
          between
          main
          technologies
        }
      }
    }
  }
  allOssYaml {
    edges {
      node {
        name
        uri
      }
    }
  }
  allBooksYaml {
    edges {
      node {
        title
        uri
        author
        year
        work_as
      }
    }
  }
  allTalksYaml {
    edges {
      node {
        title
        year
        uri
        country
        event {
          name
          uri
        }
      }
    }
  }
}
`

export default IndexPage
