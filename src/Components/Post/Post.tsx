import React, { FC } from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';
import { image, name, lorem } from 'faker';
import { PostStats } from './PostStats';

export const Post: FC = () => {
    return (
        <Card image={image.avatar()} fluid>
            <Card.Content>
                <Image avatar src={image.avatar()} />
                <a>{`${name.firstName()} ${name.lastName()}`}</a>
            </Card.Content>
            <Image src={image.animals()} wrapped ui={false} />
            <Card.Content>
                <Grid columns={2}>
                    <Grid.Row>
                        <PostStats likes={20} comments={40}/>                      
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width="16">
                            <p>{lorem.sentence()}</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Card.Content>
         
        </Card>
    );
};
