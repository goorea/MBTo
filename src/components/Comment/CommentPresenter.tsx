import React from 'react';
import Text from '~/components/texts/Text';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Comment } from '~/types/instances';
import { ThemeContext } from '~/contexts/ThemeContext';
import { ThemeContextState } from '~/types/themes';

type P = {
  comment: Comment;
  toggleLike: () => void;
};

const CommentPresenter: React.FC<P> = ({ comment, toggleLike }: P) => {
  const { colors } = React.useContext<ThemeContextState>(ThemeContext);

  return (
    <View key={comment.id} style={styles.comment}>
      <Text isBold={true} style={styles.commentTitle}>
        {comment.user.nickname}
      </Text>
      <Text>{comment.contents}</Text>

      <TouchableOpacity onPress={toggleLike} style={styles.commentLike}>
        <Ionicons
          color={comment.liked ? colors.error : colors.foreground}
          name={comment.liked ? 'heart' : 'heart-outline'}
          style={styles.icon}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  commentTitle: {
    marginRight: 4,
  },
  commentLike: {
    marginLeft: 'auto',
  },
  icon: {
    padding: 4,
  },
});

export default CommentPresenter;
