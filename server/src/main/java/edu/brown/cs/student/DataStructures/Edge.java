package edu.brown.cs.student.DataStructures;

/** Edge in a Graph.
 *
 * @param <N> Type of Node in Graph
 * @param <E> Type of Edge in Graph
 */
public interface Edge<N extends Node<N, E>, E extends Edge<N, E>> {

  /**
   * Returns the node the edge comes from.
   * @return the node the edge comes from.
   */
  N getStart();

  /**
   * Returns the node the edge goes to.
   * @return the node the edge goes to.
   */
  N getEnd();

  /**
   * Returns the weight of the edge.
   * @return the weight of the edge.
   */
  double getWeight();
}
