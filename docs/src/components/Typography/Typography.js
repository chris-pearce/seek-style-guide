import React from 'react';
import PropTypes from 'prop-types';
import {
  PageBlock,
  Card,
  Section,
  Paragraph,
  Text,
  TextLink,
  Strong,
  Positive,
  Critical,
  Secondary,
  Highlight,
  Info
} from 'seek-style-guide/react';
import Demo from '../Demo/Demo';
import textDemoSpec from 'seek-style-guide/react/Text/Text.demo';
import omit from 'lodash/omit';

const BackgroundContainer = ({ component: DemoComponent, componentProps }) => (
  <PageBlock>
    <Section style={{ maxWidth: 720 }}>
      <DemoComponent {...componentProps} />
    </Section>
  </PageBlock>
);
BackgroundContainer.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object.isRequired
};

const loremIpsum = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut convallis elit convallis, bibendum mauris et, lacinia mi.',
  'Pellentesque quis arcu dignissim nibh tempor placerat et et lorem.'
].join('\n');

const loremIpsumShort = `${loremIpsum.split(',')[0]}.`;

export default () => (
  <div>
    <PageBlock>
      <Section header>
        <Text hero>Typography</Text>
      </Section>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Paragraph>
            <Text>Since typography forms the backbone of our design language, we have a suite of responsive typographical components to support semantic usage of our type hierarchy.</Text>
          </Paragraph>
          <Paragraph>
            <Text>The core typographical building block is the &ldquo;Text&rdquo; component, which renders a block-level span element with a single grid row below it, to leave room for descenders.</Text>
          </Paragraph>
          <Paragraph>
            <Text>It accepts a wide range of options, which can be seen below.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        ...omit(textDemoSpec, 'sketch'),
        title: null
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Paragraph>
            <Text>To better understand these options, let&rsquo;s step through them one by one.</Text>
          </Paragraph>
        </Section>
        <Section>
          <Text heading>Standard Text</Text>
          <Paragraph>
            <Text>By default, when no options are provided, standard text is rendered.</Text>
          </Paragraph>
          <Paragraph>
            <Text>Standard text is 16px over 4 grid rows across both desktop and mobile.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          children: loremIpsum
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text heading>Large Text</Text>
          <Paragraph>
            <Text>In rare cases where larger text is required, you can use the &ldquo;large&rdquo; text variant, which is 18px over 5 grid rows on both desktop and mobile.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          large: true,
          children: loremIpsum
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text heading>Small Text</Text>
          <Paragraph>
            <Text>In rare cases where smaller text is required, you can use the &ldquo;small&rdquo; text variant, which is 14px over 3 grid rows on both desktop and mobile.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          small: true,
          children: loremIpsum
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text heading>Responsive Headings</Text>
          <Paragraph>
            <Text>When reading this documentation on mobile, you may be surprised to see that the headings described below all happen to look the same.</Text>
          </Paragraph>
          <Paragraph>
            <Text>While a range of heading sizes are provided, they all render as 21px over 5 grid rows on mobile. Due to the size restrictions of mobile devices, having multiple heading sizes is more likely to lead to confusion and apparent inconsistency due to the lack of significant contrast between them. When designing a page with responsive typography, it&rsquo;s important to take this into consideration by ensuring that headings on mobile are differentated in other ways, using colour or white space.</Text>
          </Paragraph>
        </Section>
        <Section>
          <Text heading>Hero Text</Text>
          <Paragraph>
            <Text>For page-level headings, hero text is 42px over 8 grid rows on desktop. Typically, you&rsquo;ll only have a single string of hero text on any given page.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          hero: true,
          children: loremIpsumShort
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text heading>Headline Text</Text>
          <Paragraph>
            <Text>For large content-level headings, headline text is 28px over 6 grid rows on desktop.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          headline: true,
          children: loremIpsumShort
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text heading>Heading Text</Text>
          <Paragraph>
            <Text>For section-level headings, heading text is 22px over 5 grid rows on desktop. In this particular case, the text remains the same size across desktop and mobile.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          heading: true,
          children: loremIpsumShort
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text heading>Subheading Text</Text>
          <Paragraph>
            <Text>In rarer cases, for secondary section-level headings, subheading text is 18px over 4 grid rows on desktop.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          subheading: true,
          children: loremIpsumShort
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text heading>Weight Variants</Text>
          <Paragraph>
            <Text>While all elements in our type hierarchy include a default weight, you can also override these with the provided weight variants.</Text>
          </Paragraph>
        </Section>
        <Section>
          <Text heading>Strong Text</Text>
          <Paragraph>
            <Text>Any text element can be explicity marked as strong with the &ldquo;strong&rdquo; property, which also causes the element to render a &ldquo;strong&rdquo; tag.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          strong: true,
          children: loremIpsumShort
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Paragraph>
            <Text>In cases where only a portion of a text block should be marked as strong, a &ldquo;Strong&rdquo; component is provided.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          // eslint-disable-next-line react/jsx-key
          children: ['The last word of this sentence is ', <Strong>strong.</Strong>]
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text heading>Regular Text</Text>
          <Paragraph>
            <Text>Any text element can be explicity set to regular weight with the &ldquo;regular&rdquo; property.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          hero: true,
          regular: true,
          children: loremIpsumShort
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text heading>Light Text</Text>
          <Paragraph>
            <Text>Finally, any text element can be explicity set to light weight with the &ldquo;light&rdquo; property.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          hero: true,
          light: true,
          children: loremIpsumShort
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text heading>Tone Variants</Text>
          <Paragraph>
            <Text>All text is rendered in our standard neutral shade of black by default, but sometimes text needs to be displayed with different tones.</Text>
          </Paragraph>
        </Section>
        <Section>
          <Text heading>Positive Text</Text>
          <Paragraph>
            <Text>Any text element can be explicity marked as positive with the &ldquo;positive&rdquo; property or the inline &ldquo;Positive&rdquo; component.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          positive: true,
          children: loremIpsumShort
        },
        options: []
      }}
    />
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          // eslint-disable-next-line react/jsx-key
          children: ['The last word of this sentence is ', <Positive>positive.</Positive>]
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text heading>Critical Text</Text>
          <Paragraph>
            <Text>Any text element can be explicity marked as critical with the &ldquo;critical&rdquo; property or the inline &ldquo;Critical&rdquo; component.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          critical: true,
          children: loremIpsumShort
        },
        options: []
      }}
    />
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          // eslint-disable-next-line react/jsx-key
          children: ['The last word of this sentence is ', <Critical>critical.</Critical>]
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text heading>Secondary Text</Text>
          <Paragraph>
            <Text>Any text element can be explicity marked as secondary with the &ldquo;secondary&rdquo; property or the inline &ldquo;Secondary&rdquo; component.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          secondary: true,
          children: loremIpsumShort
        },
        options: []
      }}
    />
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          // eslint-disable-next-line react/jsx-key
          children: ['The last word of this sentence is ', <Secondary>secondary.</Secondary>]
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text heading>Highlighted Text</Text>
          <Paragraph>
            <Text>Any text element can be explicity marked as highlighted with the &ldquo;highlight&rdquo; property or the inline &ldquo;Highlight&rdquo; component.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          highlight: true,
          children: loremIpsumShort
        },
        options: []
      }}
    />
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          // eslint-disable-next-line react/jsx-key
          children: ['The last word of this sentence is ', <Highlight>highlighted.</Highlight>]
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text heading>Info Text</Text>
          <Paragraph>
            <Text>Any text element can be explicity marked as info with the &ldquo;info&rdquo; property or the inline &ldquo;Info&rdquo; component.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          info: true,
          children: loremIpsumShort
        },
        options: []
      }}
    />
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          // eslint-disable-next-line react/jsx-key
          children: ['The last word of this sentence is ', <Info>info.</Info>]
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text heading>Text Links</Text>
          <Paragraph>
            <Text>To create a standard text-based link, a &ldquo;TextLink&rdquo; component is provided.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          // eslint-disable-next-line react/jsx-key
          children: ['The last word of this sentence is a ', <TextLink href="#">link.</TextLink>]
        },
        options: []
      }}
    />
    <PageBlock>
      <Card transparent style={{ maxWidth: 720 }}>
        <Section>
          <Text heading>Disabling Baseline</Text>
          <Paragraph>
            <Text>By default, all text is adjusted to sit correctly on baseline using <TextLink href="https://github.com/michaeltaranto/basekick">basekick</TextLink>.</Text>
          </Paragraph>
          <Paragraph>
            <Text>In some cases, when text needs to be vertically centred within a container, this isn&rsquo;t the desired behaviour. To deal with this, you can optionally disable the baseline adjustment.</Text>
          </Paragraph>
        </Section>
      </Card>
    </PageBlock>
    <Demo
      spec={{
        component: Text,
        container: BackgroundContainer,
        block: true,
        initialProps: {
          hero: true,
          baseline: false,
          children: loremIpsumShort
        },
        options: []
      }}
    />
  </div>
);
