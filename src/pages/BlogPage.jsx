import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SectionTitle } from "../components/common/CommonStyles";
import AnimatedSection from "../components/AnimatedSection";
import CryptoPrice from "../components/EthPrice";
import AnimatedBackground from "../components/Background/AnimatedBackground";
import HomeButton from "../components/HomeButton";
import { blogPosts } from "../data/blogData";

const PageContainer = styled.div`
  min-height: 100vh;
  background: transparent;
  padding-top: 40px; /* Reduced padding since no navbar */
  position: relative;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const BlogGrid = styled.div`
  display: grid;
  gap: 30px;
  margin-top: 30px;
`;

const BlogCard = styled(Link)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 30px;
  transition: all 0.3s ease;
  display: block;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: #00b2ff;
    transform: translateY(-2px);
  }
`;

const BlogTitle = styled.h2`
  color: #ffffff;
  margin-bottom: 15px;
  font-size: 1.5rem;
  font-weight: 600;
`;

const BlogExcerpt = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 15px;
`;

const BlogMeta = styled.div`
  display: flex;
  gap: 20px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ReadMore = styled.span`
  color: #00b2ff;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;

  &:after {
    content: "→";
    transition: transform 0.3s ease;
  }

  ${BlogCard}:hover & {
    &:after {
      transform: translateX(5px);
    }
  }
`;

const BlogPage = () => {
  return (
    <>
      <AnimatedBackground />
      <HomeButton />
      <CryptoPrice />
      <PageContainer>
        <ContentWrapper>
          <AnimatedSection>
            <SectionTitle style={{ fontSize: "2rem", marginBottom: "10px" }}>
              Blog
            </SectionTitle>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                marginBottom: "40px",
              }}
            >
              Thoughts on blockchain, system architecture, gaming, and more.
            </p>

            <BlogGrid>
              {blogPosts.map((post) => (
                <BlogCard key={post.id} to={`/blog/${post.id}`}>
                  <BlogTitle>{post.title}</BlogTitle>
                  <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                  <BlogMeta>
                    <MetaItem>{post.date}</MetaItem>
                    <MetaItem>{post.readTime}</MetaItem>
                    <MetaItem>{post.category}</MetaItem>
                  </BlogMeta>
                  <ReadMore>Read more</ReadMore>
                </BlogCard>
              ))}
            </BlogGrid>
          </AnimatedSection>
        </ContentWrapper>
      </PageContainer>
    </>
  );
};

export default BlogPage;
