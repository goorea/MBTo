import React from 'react';
import { Post } from '~/types/instances';
import {
  FlatList,
  Image,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '~/components/texts/Text';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import { isToday } from '~/functions';
import Comment from '~/components/Comment';
import { ThemeContext } from '~/contexts/ThemeContext';
import { ThemeContextState } from '~/types/themes';

type P = {
  post: Post;
  toggleLike: () => void;
  share: () => any;
};

const PostCardPresenter: React.FC<P> = ({ post, toggleLike, share }: P) => {
  const { colors } = React.useContext<ThemeContextState>(ThemeContext);

  return (
    <View>
      <View style={styles.header}>
        <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text isBold={true}>{post.user.nickname}</Text>
          <Text style={styles.mbti}>{post.user.mbti}</Text>
        </View>

        <TouchableOpacity onPress={() => null} style={styles.dots}>
          <Ionicons name="ellipsis-horizontal-sharp" />
        </TouchableOpacity>
      </View>

      <View>
        <Image
          source={{ uri: 'https://via.placeholder.com/400x400' }}
          style={{ width: 400, height: 400 }}
        />
      </View>

      <View style={styles.socials}>
        <View style={styles.icons}>
          <TouchableOpacity onPress={toggleLike}>
            <Ionicons
              color={post.liked ? colors.error : colors.foreground}
              name={post.liked ? 'heart' : 'heart-outline'}
              style={styles.icon}
              size={22}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => null}>
            <Ionicons
              color={colors.foreground}
              name="chatbubble-outline"
              style={styles.icon}
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={share}>
            <Ionicons
              color={colors.foreground}
              name="share-social-outline"
              style={styles.icon}
              size={20}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.likeCounts}>
          <Text isBold={true}>????????? {post.like_count}???</Text>
        </View>

        <FlatList
          style={styles.comments}
          data={post.comments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Comment comment={item} />}
        />

        <Text style={createdAtStyles(colors.gray200)}>
          {isToday(post.created_at)
            ? moment(post.created_at).fromNow()
            : moment(post.created_at).format('M??? D???')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  userInfo: {
    marginLeft: 12,
  },
  mbti: {
    marginTop: 4,
  },
  dots: {
    marginLeft: 'auto',
  },
  socials: {
    padding: 8,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 4,
  },
  likeCounts: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    marginTop: 4,
  },
  comments: {
    marginTop: 8,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
});

const createdAtStyles = (color: string): TextStyle => ({
  color,
  padding: 2,
  marginTop: 8,
  fontSize: 12,
});

export default PostCardPresenter;
