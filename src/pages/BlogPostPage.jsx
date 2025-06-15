import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import AnimatedSection from "../components/AnimatedSection";
import CryptoPrice from "../components/EthPrice";
import AnimatedBackground from "../components/Background/AnimatedBackground";
import HomeButton from "../components/HomeButton";
import { blogContent } from "../data/blogData";

const PageContainer = styled.div`
  min-height: 100vh;
  background: transparent;
  padding-top: 40px;
  position: relative;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const BackLink = styled(Link)`
  color: #00b2ff;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 30px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:before {
    content: "←";
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #60d9ff;

    &:before {
      transform: translateX(-5px);
    }
  }
`;

const PostHeader = styled.div`
  margin-bottom: 40px;
`;

const PostTitle = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
`;

const PostMeta = styled.div`
  display: flex;
  gap: 30px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const PostContent = styled.div`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  font-size: 1.1rem;

  p {
    margin-bottom: 20px;
  }

  h2 {
    color: #ffffff;
    font-size: 1.8rem;
    margin-top: 40px;
    margin-bottom: 20px;
    font-weight: 600;
  }

  h3 {
    color: #ffffff;
    font-size: 1.4rem;
    margin-top: 30px;
    margin-bottom: 15px;
    font-weight: 600;
  }

  ul,
  ol {
    margin-bottom: 20px;
    padding-left: 30px;
  }

  li {
    margin-bottom: 10px;
  }

  code {
    background: rgba(0, 178, 255, 0.1);
    color: #00b2ff;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: "Consolas", "Monaco", monospace;
    font-size: 0.9em;
  }

  pre {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 20px;
    overflow-x: auto;
    margin-bottom: 20px;

    code {
      background: none;
      color: rgba(255, 255, 255, 0.9);
      padding: 0;
    }
  }

  blockquote {
    border-left: 4px solid #00b2ff;
    padding-left: 20px;
    margin: 20px 0;
    font-style: italic;
    color: rgba(255, 255, 255, 0.7);
  }

  a {
    color: #00b2ff;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;

    &:hover {
      color: #60d9ff;
      border-bottom-color: #60d9ff;
    }
  }
`;

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogContent[id];

  if (!post) {
    return (
      <>
        <AnimatedBackground />
        <HomeButton />
        <CryptoPrice />
        <PageContainer>
          <ContentWrapper>
            <AnimatedSection>
              <h1 style={{ color: "#ffffff", marginBottom: "20px" }}>
                Post Not Found
              </h1>
              <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                Sorry, the blog post you're looking for doesn't exist.
              </p>
              <BackLink
                to="/blog"
                style={{ marginTop: "20px", display: "inline-flex" }}
              >
                Back to Blog
              </BackLink>
            </AnimatedSection>
          </ContentWrapper>
        </PageContainer>
      </>
    );
  }

  return (
    <>
      <AnimatedBackground />
      <HomeButton />
      <CryptoPrice />
      <PageContainer>
        <ContentWrapper>
          <AnimatedSection>
            <BackLink to="/blog">Back to Blog</BackLink>

            <PostHeader>
              <PostTitle>{post.title}</PostTitle>
              <PostMeta>
                <MetaItem>{post.date}</MetaItem>
                <MetaItem>{post.readTime}</MetaItem>
                <MetaItem>{post.category}</MetaItem>
              </PostMeta>
            </PostHeader>

            <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
          </AnimatedSection>
        </ContentWrapper>
      </PageContainer>
    </>
  );
};

export default BlogPostPage;
