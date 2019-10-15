import {Container, Item, ProjectGrid} from 'Common';
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import forkIcon from 'Static/icons/fork.svg';
import starIcon from 'Static/icons/star.svg';
import {Card, Content, Stats, Wrapper} from './styles';

const info = require('../../../../data/info');

export const Projects = () => {
  const {
    github: {
      repositoryOwner: {
        repositories: {edges},
      },
    },
  } = useStaticQuery(graphql`
    {
      github {
        repositoryOwner(login: "timrodz") {
          repositories(first: 6, orderBy: {field: PUSHED_AT, direction: DESC}) {
            edges {
              node {
                id
                name
                url
                description
                stargazers {
                  totalCount
                }
                forkCount
                isFork
                parent {
                  nameWithOwner
                }
              }
            }
          }
        }
      }
    }
  `);

  const renderRepositoryType = (parent, isFork, stargazers, forkCount) => {
    return isFork ? (
      <div>
        <img loading="lazy" src={forkIcon} alt="forks" />
        <p>{parent.nameWithOwner}</p>
      </div>
    ) : (
      <>
        <div>
          <img loading="lazy" src={starIcon} alt="stars" />
          <span>{stargazers.totalCount}</span>
        </div>
        <div>
          <img loading="lazy" src={forkIcon} alt="forks" />
          <span>{forkCount}</span>
        </div>
      </>
    );
  };

  return (
    <Wrapper as={Container} id="projects">
      <h2>Open Source Projects</h2>
      <p>{info.projects}</p>
      <ProjectGrid>
        {edges.map(({node: project}) => {
          const {
            id,
            url,
            name,
            description,
            isFork,
            parent,
            stargazers,
            forkCount,
          } = project;

          return (
            <Item key={id} as="a" href={url} target="_blank" rel="noopener noreferrer">
              <Card>
                <Content>
                  <h4>{name}</h4>
                  <p>{description}</p>
                </Content>
                <Stats>
                  {renderRepositoryType(parent, isFork, stargazers, forkCount)}
                </Stats>
              </Card>
            </Item>
          );
        })}
      </ProjectGrid>
    </Wrapper>
  );
};
