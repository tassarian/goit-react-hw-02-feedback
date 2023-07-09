import { FeedbackItem, FeedbackList, StyledValue } from './Feedback.styled';

export const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
	return (
		<FeedbackList>
			<FeedbackItem>
				Good:
				<StyledValue>{good}</StyledValue>
			</FeedbackItem>
			<FeedbackItem>
				Neutral:
				<StyledValue>{neutral}</StyledValue>
			</FeedbackItem>
			<FeedbackItem>
				Bad:
				<StyledValue>{bad}</StyledValue>
			</FeedbackItem>
			<FeedbackItem>
				Total:
				<StyledValue>{total}</StyledValue>
			</FeedbackItem>
			<FeedbackItem>
				Positive Feedback:
				<StyledValue>{positivePercentage}%</StyledValue>
			</FeedbackItem>
		</FeedbackList>
	);
};
